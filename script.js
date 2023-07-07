let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector('select');

// Retrieve available voices when the voiceschanged event is triggered
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Populate the voice options in the select dropdown
    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i));
}

// Update the selected voice when the user changes the option in the select dropdown
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

// Start the text-to-speech conversion when the button is clicked
document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});
