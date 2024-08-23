import { initPWA } from './pwa.js'

let currentAudio = null;

// Function to play a sound
function playSound(soundSrc) {
    // Stop the currently playing audio, if any
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create a new audio object and play the sound
    currentAudio = new Audio(soundSrc);
    currentAudio.play();
}

// Function to create buttons dynamically based on audio tags
function createButtons() {
    const buttonContainer = document.getElementById("buttonContainer");
    const audioTags = document.querySelectorAll("audio");

    audioTags.forEach((audioTag) => {
        const soundSrc = audioTag.getAttribute("src");

        // Create a new button element
        const button = document.createElement("button");
        button.classList.add("sound-button");
        button.ariaLabel = "Play sound"

        // Add an event listener to play the sound on click
        button.addEventListener("click", () => playSound(soundSrc));

        // Append the button to the container
        buttonContainer.appendChild(button);
    });
}

// Call the function to create the buttons on page load
createButtons();

initPWA()
