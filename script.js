const cards = document.querySelector(".cards");

openPlaylist.addEventListener("click", function() {
    cards.classList.add("showPlaylist");
});

openGreeting.addEventListener("click", function() {
    cards.classList.remove("showPlaylist");
});



const memories =
    [
        {
            image: "Картинки/img_1.jpg",
            song: "Песни/sng_1.mp3",
            title: "Ты так красива",
            author: "QUEST PISTOLS"
        },
        {
            image: "Картинки/img_2.jpg",
            song: "Песни/sng_2.mp3",
            title: "Секс по-питерски",
            author: "КлоуКома"
        },
        {
            image: "Картинки/img_3.jpg",
            song: "Песни/sng_3.mp3",
            title: "ну и чё?",
            author: "blazer 993"
        },
        {
            image: "Картинки/img_4.jpg",
            song: "Песни/sng_4.mp3",
            title: "волна",
            author: "тима ищет свет"
        },
        {
            image: "Картинки/img_5.jpg",
            song: "Песни/sng_5.mp3",
            title: "Sigma Girl",
            author: "Мария Янковская & POLI"
        },
        {
            image: "Картинки/img_6.jpg",
            song: "Песни/sng_6.mp3",
            title: "Sigma Boy",
            author: "Betsy feat. Мария Янковская"
        },
        {
            image: "Картинки/img_7.jpg",
            song: "Песни/sng_7.mp3",
            title: "What is Love",
            author: "Haddaway"
        },
        {
            image: "Картинки/img_8.jpg",
            song: "Песни/sng_8.mp3",
            title: "Школьный реп",
            author: "Enina"
        },
        {
            image: "Картинки/img_9.jpg",
            song: "Песни/sng_9.mp3",
            title: "Mi Mi Mi",
            author: "Serebro"
        },
        {
            image: "Картинки/img_10.jpg",
            song: "Песни/sng_10.mp3",
            title: "За Деньги Да",
            author: "INSTASAMKA"
        },
        {
            image: "Картинки/img_11.jpg",
            song: "Песни/sng_11.mp3",
            title: "Соня",
            author: "Ксюшка"
        },
        {
            image: "Картинки/img_12.jpg",
            song: "Песни/sng_12.mp3",
            title: "Эверест",
            author: "INSTASAMKA"
        },
        {
            image: "Картинки/img_13.jpg",
            song: "Песни/sng_13.mp3",
            title: "В Каждом Маленьком Ребенке",
            author: "Детская"
        },
        {
            image: "Картинки/img_14.jpg",
            song: "Песни/sng_14.mp3",
            title: "КАК ДЕЛИШКИ",
            author: "GONE.Fludd"
        },



    ];


let image = document.getElementById('memory_Image');
let song = document.getElementById('memory_Song');
let title = document.getElementById('memory_Title');
let author = document.getElementById('memory_Author');

let PlayPause = document.getElementById('PlayPause');
let currentMemory = 0;

function ShowMemory() {
    const memory = memories[currentMemory];

    image.src = memory.image;
    song.src = memory.song;
    title.textContent = memory.title;
    author.textContent = memory.author;
    song.play();
    song.volume = 0.05;
    if (song.paused) PlayPause.src = "Картинки/всякая фигня/плей.png";
    else PlayPause.src = "Картинки/всякая фигня/пауза.png";
}

ShowMemory();



function PlayPauseMusic() {
    if (song.paused) {
        song.play();
        PlayPause.src = "Картинки/всякая фигня/пауза.png";
    }
    else {
        song.pause();
        PlayPause.src = "Картинки/всякая фигня/плей.png";
    }
}

function previousMusic() {
    currentMemory--;
    if (currentMemory < 0) {
        currentMemory = memories.length - 1;
        progress.value = 0;
    }

    ShowMemory();
}

function nextMusic() {
    currentMemory++;
    if (currentMemory >= memories.length) {
        currentMemory = 0
        progress.value = 0;
    }

    ShowMemory();
}

document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") {
        currentMemory++;
        if (currentMemory >= memories.length) {
            currentMemory = 0
            progress.value = 0;
        }

        ShowMemory();
    }
    if (event.key === "ArrowLeft") {
        currentMemory--;
        if (currentMemory < 0) {
            currentMemory = memories.length - 1;
            progress.value = 0;
        }

        ShowMemory();
    }
    if (event.key === " ") {
        if (song.paused) {
            song.play();
            PlayPause.src = "Картинки/всякая фигня/пауза.png";
        }
        else {
            song.pause();
            PlayPause.src = "Картинки/всякая фигня/плей.png";
        }
    }
})

const progress = document.getElementById("progress");

song.addEventListener("loadedmetadata", function()
{
    progress.max = song.duration;
});

song.addEventListener("timeupdate", function()
{
    progress.value = song.currentTime;

    let percent = (song.currentTime / song.duration) * 100;

    // Красная и серая часть
    progress.style.background =
        `linear-gradient(to right, #af324b ${percent}%, #999 ${percent}%)`;

    // Двигаем сердце
    let heart = document.getElementById("progressHeart");

    let position = (progress.offsetWidth * percent) / 100;

    heart.style.left = position + "px";
});

progress.addEventListener("input", function()
{
    song.currentTime = progress.value;
});

song.addEventListener("ended", function()
{
    nextMusic();
});
function updateProgress() {
    if (!memory_Song.paused) {
        progress.value = memory_Song.currentTime;
    }

    requestAnimationFrame(updateProgress);
}

updateProgress();