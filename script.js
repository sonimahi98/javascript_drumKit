function removeTransition(e){
    if (e.propertyName !== "transform") return;
    e.target.classList.remove('playing');
}

function playSound(e){
    let audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`)
    let key = document.querySelector(`div[data-key= "${e.keyCode}"]`)
    if(!audio) return;

    key.classList.add("playing");
    audio.play();
    audio.currentTime= 0;
};

let keys = document.querySelectorAll(".keys");
keys.forEach(key => key.addEventListener ("transitionend",removeTransition));
window.addEventListener("keydown", playSound);