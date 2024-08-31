// Song data with images and links
const songs = [
    {
        "song_name": "Fkin' Problems",
        "artist": "A$AP Rocky",
        "featuring": ["Drake", "2 Chainz", "Kendrick Lamar"],
        "duration": "3:53",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/A%24AP%20ROCKY%20-%20Fkin%27%20Problems%20ft.%20Drake%2C%202%20Chainz%2C%20Kendrick%20Lamar.mp3",
        "image": "https://c.saavncdn.com/822/AfroHipHop-Vol2-English-2017-20170613100429-500x500.jpg"
    },
    {
        "song_name": "Mia",
        "artist": "Bad Bunny",
        "featuring": ["Drake"],
        "duration": "3:30",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Bad%20Bunny%20feat.%20Drake%20-%20Mia.mp3",
        "image": "https://upload.wikimedia.org/wikipedia/en/e/ef/Mia_%28official_single_cover%29.png"
    },
    {
        "song_name": "Blessings",
        "artist": "Big Sean",
        "featuring": ["Drake", "Kanye West"],
        "duration": "4:00",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Big%20Sean%20-%20Blessings%20ft.%20Drake%2C%20Kanye%20West.mp3",
        "image": "https://en.wikipedia.org/wiki/Blessings_%28Big_Sean_song%29"
    },
    {
        "song_name": "Look Alive",
        "artist": "BlocBoy JB",
        "featuring": ["Drake"],
        "duration": "3:00",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/BlocBoy%20JB%20%26%20Drake%20-%20Look%20Alive.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Look+Alive"
    },
    {
        "song_name": "5AM In Toronto",
        "artist": "Drake",
        "featuring": [],
        "duration": "5:00",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%205AM%20In%20Toronto.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=5AM+In+Toronto"
    },
    {
        "song_name": "Behind Barz",
        "artist": "Drake",
        "featuring": [],
        "duration": "2:58",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Behind%20Barz.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Behind+Barz"
    },
    {
        "song_name": "Best I Ever Had",
        "artist": "Drake",
        "featuring": [],
        "duration": "4:17",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Best%20I%20Ever%20Had.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Best+I+Ever+Had"
    },
    {
        "song_name": "Blue Tint",
        "artist": "Drake",
        "featuring": [],
        "duration": "2:42",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Blue%20Tint.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Blue+Tint"
    },
    {
        "song_name": "Chicago Freestyle",
        "artist": "Drake",
        "featuring": ["Giveon"],
        "duration": "5:20",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Chicago%20Freestyle%20ft.%20Giveon.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Chicago+Freestyle"
    },
    {
        "song_name": "Club Paradise",
        "artist": "Drake",
        "featuring": [],
        "duration": "4:22",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Club%20Paradise.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Club+Paradise"
    },
    {
        "song_name": "Days In The East",
        "artist": "Drake",
        "featuring": [],
        "duration": "3:58",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Days%20In%20The%20East.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Days+In+The+East"
    },
    {
        "song_name": "Demons",
        "artist": "Drake",
        "featuring": ["Fivio Foreign", "Sosa Geek"],
        "duration": "3:19",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Demons%20ft.%20Fivio%20Foreign%2C%20Sosa%20Geek.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Demons"
    },
    {
        "song_name": "Desires",
        "artist": "Drake",
        "featuring": ["Future"],
        "duration": "2:57",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Desires%20ft.%20Future.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Desires"
    },
    {
        "song_name": "Emotionless",
        "artist": "Drake",
        "featuring": [],
        "duration": "2:38",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Emotionless.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Emotionless"
    },
    {
        "song_name": "Free Spirit",
        "artist": "Drake",
        "featuring": ["Rick Ross"],
        "duration": "3:09",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Free%20Spirit%20%28ft.%20Rick%20Ross%29.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Free+Spirit"
    },
    {
        "song_name": "God's Plan",
        "artist": "Drake",
        "featuring": [],
        "duration": "3:18",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20God%27s%20Plan.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=God%27s+Plan"
    },
    {
        "song_name": "H.Y.F.R",
        "artist": "Drake",
        "featuring": ["Lil Wayne"],
        "duration": "3:49",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20H.Y.F.R%20ft.%20Lil%20Wayne.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=H.Y.F.R"
    },
    {
        "song_name": "Headlines",
        "artist": "Drake",
        "featuring": [],
        "duration": "3:25",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Headlines.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Headlines"
    },
    {
        "song_name": "Hold On, We're Going Home",
        "artist": "Drake",
        "featuring": ["Majid Jordan"],
        "duration": "3:47",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Hold%20On%2C%20We%27re%20Going%20Home%20%28feat.%20Majid%20Jordan%29.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Hold+On%2C+We%27re+Going+Home"
    },
    {
        "song_name": "Demons",
        "artist": "Drake",
        "featuring": ["Fivio Foreign", "Sosa Geek"],
        "duration": "3:19",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Demons%20ft.%20Fivio%20Foreign%2C%20Sosa%20Geek.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Demons"
    },
    {
        "song_name": "Desires",
        "artist": "Drake",
        "featuring": ["Future"],
        "duration": "2:57",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Desires%20ft.%20Future.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Desires"
    },
    {
        "song_name": "Emotionless",
        "artist": "Drake",
        "featuring": [],
        "duration": "2:38",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Emotionless.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Emotionless"
    },
    {
        "song_name": "Free Spirit",
        "artist": "Drake",
        "featuring": ["Rick Ross"],
        "duration": "3:09",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Free%20Spirit%20%28ft.%20Rick%20Ross%29.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Free+Spirit"
    },
    {
        "song_name": "God's Plan",
        "artist": "Drake",
        "featuring": [],
        "duration": "3:18",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20God%27s%20Plan.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=God%27s+Plan"
    },
    {
        "song_name": "H.Y.F.R",
        "artist": "Drake",
        "featuring": ["Lil Wayne"],
        "duration": "3:49",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20H.Y.F.R%20ft.%20Lil%20Wayne.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=H.Y.F.R"
    },
    {
        "song_name": "Headlines",
        "artist": "Drake",
        "featuring": [],
        "duration": "3:25",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Headlines.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Headlines"
    },
    {
        "song_name": "Hold On, We're Going Home",
        "artist": "Drake",
        "featuring": ["Majid Jordan"],
        "duration": "3:47",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Hold%20On%2C%20We%27re%20Going%20Home%20%28feat.%20Majid%20Jordan%29.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Hold+On%2C+We%27re+Going+Home"
    },
    {
        "song_name": "In My Feelings",
        "artist": "Drake",
        "featuring": [],
        "duration": "3:37",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20In%20My%20Feelings.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=In+My+Feelings"
    },
    {
        "song_name": "Nonstop",
        "artist": "Drake",
        "featuring": [],
        "duration": "3:58",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Nonstop.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Nonstop"
    },
    {
        "song_name": "Not You Too",
        "artist": "Drake",
        "featuring": ["Chris Brown"],
        "duration": "3:23",
        "link": "https://ia903204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Not%20You%20Too%20ft.%20Chris%20Brown.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Not+You+Too"
    },
    {
        "song_name": "Pain 1993",
        "artist": "Drake",
        "featuring": ["Playboi Carti"],
        "duration": "3:32",
        "link": "https://ia803204.us.archive.org/10/items/drake-kanye-west-lil-wayne-eminem-forever_202007/Drake%20-%20Pain%201993%20ft.%20Playboi%20Carti.mp3",
        "image": "https://via.placeholder.com/300x300.png?text=Pain+1993"
    }
    
];


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
updateAlbum();