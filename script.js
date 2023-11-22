const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("tunes/a.wav");
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
    audio.play(); // playing audio

}
 
pianoKeys.forEach(key => {
    // clling playtune function with passing data-key value as argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});


const pressedkey = (e) => {
    playTune(e.key);
}

document.addEventListener("keydown", pressedkey);