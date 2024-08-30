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
    }
];

let currentIndex = 0;
let state = false;

// DOM Elements
const albumTitle = document.querySelector('.album-title');
const albumImage = document.querySelector('.album img');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const audioElement = document.querySelector('.my-song');
const record = document.querySelector('.record');
const toneArm = document.querySelector('.tone-arm');
const playButton = document.querySelector('.btn');
const slider = document.querySelector('.slider');

// Function to update the album info
function updateAlbum() {
    const song = songs[currentIndex];
    albumTitle.textContent = song.song_name;
    albumImage.src = song.image; // Update album image
    audioElement.src = song.link; // Update audio source
    
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex === songs.length - 1;
    
    // If the record is playing, ensure the new song starts playing
    if (state) {
        record.classList.add("on");
        toneArm.classList.add("play");
        audioElement.play();
    }
}

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

// Function to handle play/pause
function togglePlay() {
    if (state === false) {
        record.classList.add("on");
        toneArm.classList.add("play");
        audioElement.play();
    } else {
        record.classList.remove("on");
        toneArm.classList.remove("play");
        audioElement.pause();
    }
    state = !state;
}

// Function to handle volume control
function adjustVolume(e) {
    audioElement.volume = Number(e.target.value);
}

// Event listeners
playButton.addEventListener("click", togglePlay);
slider.addEventListener("input", adjustVolume);
leftButton.addEventListener('click', showPrevious);
rightButton.addEventListener('click', showNext);

// Initial setup
updateAlbum();
