const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const likeButton = document.getElementById("like");
const currentProgress = document.getElementById("current-progress");
const progressContainer = document.getElementById("progress-container");
const shuffleButton = document.getElementById("shuffle");
const repeatButton = document.getElementById("repeat");
const songTime = document.getElementById("song-time");
const totalTime = document.getElementById("total-time");

const song1 = { 
    songName: "Kickstart My Heart",
    artist: "Leo",
    file: "kickstart_my_heart",
    cover: "just_take_this_songs_and_youll_never_feel_left_all_alone",
    liked: false
};

const song2 = { 
    songName: "Same Ol' Situation (S.O.S)",
    artist: "Leo",
    file: "same_ol_situation",
    cover: "just_take_this_songs_and_youll_never_feel_left_all_alone",
    liked: false
};

const song3 = { 
    songName: "Home Sweet Home",
    artist: "Leo",
    file: "home_sweet_home",
    cover: "just_take_this_songs_and_youll_never_feel_left_all_alone",
    liked: false
};

const song4 = { 
    songName: "You're All I Need",
    artist: "Leo",
    file: "youre_all_i_need",
    cover: "just_take_this_songs_and_youll_never_feel_left_all_alone",
    liked: false
};

const song5 = { 
    songName: "Without You",
    artist: "Leo",
    file: "without_you",
    cover: "just_take_this_songs_and_youll_never_feel_left_all_alone",
    liked: false
};

const song6 = { 
    songName: "Your Love",
    artist: "Leo",
    file: "your_love",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song7 = { 
    songName: "Take On Me",
    artist: "Leo",
    file: "take_on_me",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song8 = { 
    songName: "Wild World",
    artist: "Leo",
    file: "wild_world",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song9 = { 
    songName: "She's The One",
    artist: "Leo",
    file: "shes_the_one",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song10 = { 
    songName: "Every Breath You Take",
    artist: "Leo",
    file: "every_breath_you_take",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song11 = { 
    songName: "Future Days",
    artist: "Leo",
    file: "future_days",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song12 = { 
    songName: "I'm A Believer",
    artist: "Leo",
    file: "im_a_believer",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song13 = { 
    songName: "Love Of My Life",
    artist: "Leo",
    file: "love_of_my_life",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song14 = { 
    songName: "Linger",
    artist: "Leo",
    file: "linger",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song15 = { 
    songName: "Miss You Love",
    artist: "Leo",
    file: "miss_you_love",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song16 = { 
    songName: "Home Is Such A Lonely Place",
    artist: "Leo",
    file: "home_is_such_a_lonely_place",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song17 = { 
    songName: "Precious Metal Girl",
    artist: "Leo",
    file: "precious_metal_girl",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song18 = { 
    songName: "Despair-Ridden Hearts",
    artist: "Leo",
    file: "despair_ridden_hearts",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song19 = { 
    songName: "More Than Words",
    artist: "Leo",
    file: "more_than_words",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song20 = { 
    songName: "Wish You Were Here",
    artist: "Leo",
    file: "wish_you_were_here",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song21 = { 
    songName: "Você Me Faz Tão Bem",
    artist: "Leo",
    file: "voce_me_faz_tao_bem",
    cover: "i_give_you_all_my_love",
    liked: false
};

const song22 = { 
    songName: "Hot Cherie",
    artist: "Leo",
    file: "hot_cherie",
    cover: "",
    liked: false
};

let isPlaying = false;
let isShuffled = false;
let repeatOn = false;
const playlist = [song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12, song13, song14, song15, song16, song17, song18, song19, song20, song21, song22];
const originalPlaylist = JSON.parse(localStorage.getItem('playlist')) ?? playlist;
let sortedPlaylist = [...originalPlaylist];
let index = 0;

function playSong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    isPlaying = false;
}

function playPauseDecider() {
    if (isPlaying === true) {
        pauseSong();
    }
    else {
        playSong();
    }
}

function likeButtonRender() {
    if (sortedPlaylist[index].liked === true) {
        likeButton.querySelector(".bi").classList.remove("bi-heart");
        likeButton.querySelector(".bi").classList.add("bi-heart-fill");
        likeButton.classList.add("button-active");
    }
    else {
        likeButton.querySelector(".bi").classList.add("bi-heart");
        likeButton.querySelector(".bi").classList.remove("bi-heart-fill");
        likeButton.classList.remove("button-active");
    }
}

function initializeSong() {
    cover.src = `images/${sortedPlaylist[index].cover}.jpg`;
    song.src = `songs/${sortedPlaylist[index].file}.mp3`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
    likeButtonRender();
}

function previousSong() {
    if (index === 0) {
        index = sortedPlaylist.length - 1;
    }
    else {
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong() {
    if (index === sortedPlaylist.length - 1) {
        index = 0;
    }
    else {
        index += 1;
    }
    initializeSong();
    playSong();
}

function updateProgress() {
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty("--progress", `${barWidth}%`);
    songTime.innerText = toHHMMSS(song.currentTime);
}

function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width) * song.duration;
    song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray) {
    const size = preShuffleArray.length;
    let currentIndex = size - 1;
    
    while(currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * size);
        let aux = preShuffleArray[currentIndex];
        preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
        preShuffleArray[randomIndex] = aux;
        currentIndex -= 1;
    }
}

function shuffleButtonClicked() {
    if (isShuffled === false) {
        isShuffled = true;
        shuffleArray(sortedPlaylist);
        shuffleButton.classList.add('button-active');
    }
    else {
        isShuffled = false;
        sortedPlaylist = [...originalPlaylist];
        shuffleButton.classList.remove('button-active');
    }
}

function repeatButtonClicked() {
    if (repeatOn === false) {
        repeatOn = true;
        repeatButton.classList.add('button-active');
    }
    else {
        repeatOn = false;
        repeatButton.classList.remove('button-active');
    }
}

function nextOrRepeat() {
    if (repeatOn === false) {
        nextSong();
    }
    else {
        playSong();
    }
}

function toHHMMSS(originalNumber) {
    let hours = Math.floor(originalNumber / 3600);
    let min = Math.floor((originalNumber - hours * 3600) / 60);
    let secs = Math.floor(originalNumber - hours  * 3600 - min * 60);

    return `${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTotalTime() {
    totalTime.innerText = toHHMMSS(song.duration);
}

function likeButtonClicked() {
    if (sortedPlaylist[index].liked === false) {
        sortedPlaylist[index].liked = true;
    }
    else {
        sortedPlaylist[index].liked = false;
    }
    likeButtonRender();
    localStorage.setItem('playlist', JSON.stringify(originalPlaylist));
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgress);
song.addEventListener('ended', nextOrRepeat);
song.addEventListener('loadedmetadata', updateTotalTime);
progressContainer.addEventListener('click', jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);
repeatButton.addEventListener('click', repeatButtonClicked);
likeButton.addEventListener('click', likeButtonClicked);