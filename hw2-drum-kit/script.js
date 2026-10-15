
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


/* HW2-T03: Keyboard Controls */

const drumPadMap = new Map();

drumPads.forEach((pad) => {
    drumPadMap.set(pad.dataset.key, pad);
});

document.addEventListener("keydown", (event) => {
    // Ignore repeated events when holding a key
    if (event.repeat) {
        return;
    }

    // Ignore shortcuts while typing in form fields
    if (
        event.target instanceof HTMLElement &&
        event.target.closest("input, textarea, select, [contenteditable]")
    ) {
        return;
    }

    const key = event.key.toLowerCase();
    const pad = drumPadMap.get(key);

    if (!pad) {
        return;
    }

    playSound(pad.dataset.sound);
});
