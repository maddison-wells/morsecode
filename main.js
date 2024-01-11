import { convertToMorseCode, convertToEnglish } from "./module.js";

let updateText = document.getElementById("updateOnTranslation");
document.getElementById("myForm").addEventListener("input", function (event) {
  event.preventDefault();

  let inputText = document.getElementById("inputText").value.trim();
  let outputTextElement = document.getElementById("outputText");
  const letterRegex = /[a-zA-Z]/;
  // let updateText = document.getElementById("updateOnTranslation");

  if (letterRegex.test(inputText)) {
    outputTextElement.textContent = convertToMorseCode(inputText);
    updateText.innerHTML = "Translating to Morse code";
  } else {
    outputTextElement.textContent = convertToEnglish(inputText);
    updateText.innerHTML = "Translating to English";
  }
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").innerHTML = "";
  updateText.innerHTML = "";
});
