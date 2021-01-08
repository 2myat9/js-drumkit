const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key ="${e.key}" ]`);
  const key = document.querySelector(`.key[data-key ="${e.key}" ]`);

  if (!audio) {
    return; // stop the function if there is no audio
  }

  // rewind before play so that a sound can be played again before it ends
  audio.currentTime = 0; //rewind to the start of audio file
  audio.play();

  key.classList.add("playing");
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") {
    return;
  }

  // use target instead of "this" because arrow functions don't support "this"
  e.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
