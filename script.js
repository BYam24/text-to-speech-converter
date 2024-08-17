let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); // gets all voices available on device
  speech.voice = voices[0]; // speaks on first voice
  
  voices.forEach((voice, i) => 
    (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// button click and text to speech function
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});



// let speech = new SpeechSynthesisUtterance();
// let voices = [];
// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = () => {
//   voices = window.speechSynthesis.getVoices();
//   speech.voice = voices[0];
  
//   voices.forEach((voice, i) => {
//     let option = document.createElement('option');
//     option.value = i;
//     option.textContent = voice.name + ' (' + voice.lang + ')';
//     voiceSelect.appendChild(option);
//   });
// };

// voiceSelect.addEventListener("change", () => {
//   speech.voice = voices[voiceSelect.value];
// });

// document.querySelector("button").addEventListener("click", () => {
//   speech.text = document.querySelector("textarea").value;
//   window.speechSynthesis.speak(speech);
// });
