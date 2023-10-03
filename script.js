

const audioFiles = [
  'audio1.mp3',
  'audio2.mp3',
  'audio3.mp3',
  
];

function playAudio() {
  if (!isMuted) { 
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomAudioFile = audioFiles[randomIndex];
    const audioElement = new Audio(randomAudioFile);
    audioElement.play();
  }
}
let isMuted = false;
function toggleMute() {
  const muteBtn = document.getElementById('muteBtn');

  isMuted = !isMuted;

  if (isMuted) {
    muteBtn.textContent = 'Unmute';
    muteBtn.style.background= 'red';
  } else {
    muteBtn.textContent = 'Mute';
    muteBtn.style.background = ''; 
  }
}
const muteBtn = document.getElementById('muteBtn');
muteBtn.addEventListener('click', toggleMute);





async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://hindi-jokes-api.onrender.com/jokes/2?api_key=f245cad30083d11548a3351caa59', config)

  const data = await res.json()

  const jokeEl = document.getElementById('joke');
  const loadingEl = document.getElementById('loading');

  jokeEl.style.display = 'none';
  loadingEl.style.display = 'block';

  setTimeout(function() {
    jokeEl.innerHTML = data.data[0].jokeContent;
    jokeEl.style.display = 'block';
    loadingEl.style.display = 'none';

    
    setTimeout(playAudio, 3000); 
  }, 2000);
}

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
