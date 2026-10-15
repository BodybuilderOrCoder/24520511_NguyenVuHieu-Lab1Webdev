
"use strict";

/* ==========================================
   HW3 - DRIFT-FREE COUNTDOWN ENGINE
========================================== */

// 1. DOM elements

const countdownDisplay = document.querySelector("#countdown-display");
const countdownStatus = document.querySelector("#countdown-status");

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

// 2. Read the UTC ISO 8601 deadline

const deadlineString = countdownDisplay.dataset.deadline;
const deadline = Date.parse(deadlineString);

// 3. Format numbers

function padNumber(value) {
    return String(value).padStart(2, "0");
}

// 4. Update countdown

function updateCountdown() {
    // Recalculate from the actual clock on every tick.
    // Do not subtract one second from a stored counter.
    const remaining = Math.max(0, deadline - Date.now());

    const totalSeconds = Math.ceil(remaining / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysElement.textContent = padNumber(days);
    hoursElement.textContent = padNumber(hours);
    minutesElement.textContent = padNumber(minutes);
    secondsElement.textContent = padNumber(seconds);

    if (remaining === 0) {
        countdownStatus.textContent = "The event has started!";
        return true;
    }

    countdownStatus.textContent = "Countdown is running.";
    return false;
}

// 5. Start countdown safely

if (Number.isNaN(deadline)) {
    countdownStatus.textContent = "Invalid event deadline.";
} else {
    const finished = updateCountdown();

    if (!finished) {
        const timerId = setInterval(() => {
            if (updateCountdown()) {
                clearInterval(timerId);
            }
        }, 250);
    }
}
