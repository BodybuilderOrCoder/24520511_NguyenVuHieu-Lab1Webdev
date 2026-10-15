
"use strict";

const drumPads = document.querySelectorAll(".drum-pad");

function playSound(soundPath) {
    const audio = new Audio(soundPath);

    audio.currentTime = 0;

    audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
    });
}

drumPads.forEach((pad) => {
    pad.addEventListener("click", () => {
        const soundPath = pad.dataset.sound;
        playSound(soundPath);
    });
});
