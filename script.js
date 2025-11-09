// Song data with images and links
async function loadSongs() {
  try {
    const response = await fetch('songs.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading songs:', error);
    return [];
  }
}

let songs = [];
let currentIndex = 0;
let state = false;


// DOM Elements
const albumTitle = document.querySelector('.titleOfSong');
// const albumImage = document.querySelector('.album img');
const leftButton = document.querySelector('.leftskip');
const rightButton = document.querySelector('.rightskip');
const audioElement = document.querySelector('.my-song');
const record = document.querySelector('.record');
const toneArm = document.querySelector('.tone-arm');
const playButton = document.querySelector('.btn');
const slider = document.querySelector('.slider');
const scratchSound = new Audio('Sounds/scratch.mp3');
const timeDisplay = document.querySelector('.extras .time');
const playSound = new Audio('sounds/start.mp3');


// Loading alert element
const loadingAlert = document.createElement('div');
loadingAlert.textContent = "Loading...";
loadingAlert.style.display = "none";
loadingAlert.style.position = "absolute";
loadingAlert.style.top = "50%";
loadingAlert.style.left = "50%";
loadingAlert.style.transform = "translate(-50%, -50%)";
loadingAlert.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
loadingAlert.style.color = "white";
loadingAlert.style.padding = "10px 20px";
loadingAlert.style.borderRadius = "5px";
loadingAlert.style.zIndex = "1000";
document.body.appendChild(loadingAlert);

// Function to update the album info
function updateAlbum() {
    const song = songs[currentIndex];
    albumTitle.textContent = song.artist + " - " + song.song_name;
    audioElement.src = song.link; // Update audio source
    
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex === songs.length - 1;

    // Check if text overflows and add/remove scrolling effect
    if (albumTitle.scrollWidth > albumTitle.clientWidth) {
        albumTitle.style.animation = "marquee 16s linear infinite";
    } else {
        albumTitle.style.animation = "none";
    }

    // Show loading alert
    loadingAlert.style.display = "block";

    // If the record is playing, ensure the new song starts playing
    if (state) {
        record.classList.add("on");
        toneArm.classList.add("play");
        audioElement.play();
    }
}

// Event listeners to handle loading states
audioElement.addEventListener('waiting', () => {
    loadingAlert.style.display = "block";
});

audioElement.addEventListener('canplay', () => {
    loadingAlert.style.display = "none";
});

audioElement.addEventListener('playing', () => {
    loadingAlert.style.display = "none";
});

// Functions to handle previous and next button clicks
function showPrevious() {
    if (currentIndex > 0) {
        currentIndex--;
        updateAlbum();
    }
}

function showNext() {
    if (currentIndex < songs.length - 1) {
        currentIndex++;
        updateAlbum();
    }
}

// Function to play the scratch sound and pause/resume the song
function playScratchSound() {
    const wasPlaying = !audioElement.paused;
    audioElement.pause();

    scratchSound.currentTime = 0;

    scratchSound.play().then(() => {
        scratchSound.addEventListener('ended', () => {
            if (wasPlaying) {
                audioElement.play();
            }
        });
    }).catch(error => {
        console.error('Error playing scratch sound:', error);
        if (wasPlaying) {
            audioElement.play();  
        }
    });
}

// Function to skip forward 5 seconds
function skipForward() {
    playScratchSound();
    scratchSound.addEventListener('ended', () => {
        if (audioElement.currentTime + 5 < audioElement.duration) {
            audioElement.currentTime += 5;
        } else {
            audioElement.currentTime = audioElement.duration;
        }
    });
}

// Function to skip backward 5 seconds
function skipBackward() {
    playScratchSound();  // Play scratch sound before skipping
    scratchSound.addEventListener('ended', () => {
        if (audioElement.currentTime - 5 > 0) {
            audioElement.currentTime -= 5;
        } else {
            audioElement.currentTime = 0;
        }
    });
}
const loopButton = document.querySelector('.loopbutton');
let loopInterval;
let isLooping = false;
let loopStartTime = 0;
let loopCount = 0;
let isPlayingScratch = false;
let hasPlayedScratch = false; 
const loopDuration = 10;

function toggleLoop() {
    isLooping = !isLooping;

    if (isLooping) {
        loopButton.classList.add('activated');
        timeDisplay.classList.add('activated');

        loopStartTime = audioElement.currentTime - loopDuration;

        if (loopStartTime < 0) {
            loopStartTime = 0;
        }

        console.log(`Loop start time set to: ${loopStartTime}`);
        updateTime();

        hasPlayedScratch = false;
        clearInterval(loopInterval);

        loopInterval = setInterval(() => {
            const currentTime = audioElement.currentTime;

            if (currentTime >= loopStartTime + loopDuration) {
                if (!hasPlayedScratch) {
                    playScratchSound();
                    hasPlayedScratch = true;

                    setTimeout(() => {
                        hasPlayedScratch = false;
                    }, 10000);
                }

                audioElement.currentTime = loopStartTime;
            }
        }, 50);
    } else {
        loopButton.classList.remove('activated');
        timeDisplay.classList.remove('activated');
        clearInterval(loopInterval);
        loopInterval = null;
        console.log('Loop stopped.');
    }
}

loopButton.addEventListener('click', toggleLoop);

function updateTime() {
    let timeText = '';
    timeText = formatTime(audioElement.currentTime);
    timeDisplay.textContent = timeText;
}

// Function to automatically skip to the next song when the current one ends
let partialSound;
function playPartialSound(src, duration) {
    partialSound = new Audio(src);
    partialSound.currentTime = 0; 
    partialSound.play();

    setTimeout(() => {
        partialSound.pause();
        partialSound.currentTime = 0;
    }, duration * 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}



// Function to handle play/pause
function togglePlay() {
    if (state === false) {
        playPartialSound('sounds/start.mp3', 3);
        record.classList.add("on");
        toneArm.classList.add("play");
        audioElement.play();
    } else {
        record.classList.remove("on");
        toneArm.classList.remove("play");
        if (partialSound) {
            partialSound.pause(); 
            partialSound.currentTime = 0;
        }
        audioElement.pause();
    }
    state = !state;
}

// Function to handle volume control
function adjustVolume(e) {
    audioElement.volume = Number(e.target.value);
    scratchSound.volume = Number(e.target.value);
    playSound.volume = Number(e.target.value);
}

// Event listeners
audioElement.addEventListener('ended', showNext);
audioElement.addEventListener('timeupdate', updateTime);
document.querySelector('.FiveSeconds.leftSeconds').addEventListener('click', skipBackward);
document.querySelector('.FiveSeconds.rightSeconds').addEventListener('click', skipForward);
playButton.addEventListener("click", togglePlay);
slider.addEventListener("input", adjustVolume);
leftButton.addEventListener('click', showPrevious);
rightButton.addEventListener('click', showNext);

// Initial setup
async function initialize() {
    songs = await loadSongs();
    updateAlbum();
}

initialize();