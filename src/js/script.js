const maxTracks = 10;

const trackInfo = [
  {
    id: 1,
    title: "Perguntas da Meia Noite",
  },
  {
    id: 2,
    title: "Desinformações sobre o universo",
  },
  {
    id: 3,
    title: "O verdadeiro sabor da água",
  },
  {
    id: 4,
    title: "SÓ PRA FRISAR, A GENTE JÁ DEU ft. Marqueszero",
  },
  {
    id: 5,
    title: "OS MEMES DO FIM DO MUNDO",
  },
  {
    id: 6,
    title: "O PODCAST MAIS ERRADO ft GEMAPLYS",
  },
  {
    id: 7,
    title: "CocaCola e Bananada",
  },
  {
    id: 8,
    title: "ÁGUA DO RIO NA TORNEIRA",
  },
  {
    id: 9,
    title: "AS PIORES FANFICS DO MUNDO",
  },
  {
    id: 10,
    title: "50 MILHÕES POR DIA",
  },
];

const btnPlayPause = document.getElementById("play-pause-btn");
const btnNext = document.getElementById("next-btn");
const btnBack = document.getElementById("back-btn");

const audioTrackPlayer = document.getElementById("audio-track-player");
const audioTrackVolumeControl = document.getElementById(
  "audio-track-volume-control"
);
const audioTrackVolumeValue = document.getElementById(
  "audio-track-volume-value"
);
const trackNum = document.getElementById("track-num");
const trackTitle = document.getElementById("track-title");

let playing = false;
let currentTrack = 1;

function playAudio() {
  audioTrackPlayer.play();
  btnPlayPause.classList.remove("bi-play-btn-fill");
  btnPlayPause.classList.add("bi-pause-btn-fill");
  playing = true;
}

function pauseAudio() {
  audioTrackPlayer.pause();
  btnPlayPause.classList.add("bi-play-btn-fill");
  btnPlayPause.classList.remove("bi-pause-btn-fill");
  playing = false;
}

function playOrPause() {
  if (playing) {
    pauseAudio();
  } else {
    playAudio();
  }
}

function nextAudio() {
  if (currentTrack === maxTracks) {
    currentTrack = 10;
  } else {
    currentTrack += 1;
  }
  audioTrackPlayer.src = `src/audio/${currentTrack}.mp3`;
  pauseAudio();
  trackNum.innerText =
    "#" + trackInfo.find((track) => track.id === currentTrack).id;
  trackTitle.innerText = trackInfo
    .find((track) => track.id === currentTrack)
    .title.toUpperCase();
}

function previousAudio() {
  if (currentTrack <= 1) {
    currentTrack = 1;
  } else {
    currentTrack -= 1;
  }
  audioTrackPlayer.src = `src/audio/${currentTrack}.mp3`;
  pauseAudio();
  trackNum.innerText =
    "#" + trackInfo.find((track) => track.id === currentTrack).id;
  trackTitle.innerText = trackInfo
    .find((track) => track.id === currentTrack)
    .title.toUpperCase();
}

btnPlayPause.addEventListener("click", playOrPause);
btnNext.addEventListener("click", nextAudio);
btnBack.addEventListener("click", previousAudio);

audioTrackVolumeControl.addEventListener("input", () => {
  audioTrackPlayer.volume = audioTrackVolumeControl.value;
  audioTrackVolumeValue.textContent = `Volume: ${Math.round(audioTrackVolumeControl.value * 100)}`;
});
