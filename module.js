export function convertToMorseCode(inputText) {
  const morseCodeArray = inputText
    .toUpperCase()
    .split("")
    .map((char) => {
      switch (char) {
        case "A":
          return ".-";
        case "B":
          return "-...";
        case "C":
          return "-.-.";
        case "D":
          return "-..";
        case "E":
          return ".";
        case "F":
          return "..-.";
        case "G":
          return "--.";
        case "H":
          return "....";
        case "I":
          return "..";
        case "J":
          return ".---";
        case "K":
          return "-.-";
        case "L":
          return ".-..";
        case "M":
          return "--";
        case "N":
          return "-.";
        case "O":
          return "---";
        case "P":
          return ".--.";
        case "Q":
          return "--.-";
        case "R":
          return ".-.";
        case "S":
          return "...";
        case "T":
          return "-";
        case "U":
          return "..-";
        case "V":
          return "...-";
        case "W":
          return ".--";
        case "X":
          return "-..-";
        case "Y":
          return "-.--";
        case "Z":
          return "--..";
        case " ":
          return "/";
      }
    });

  return morseCodeArray.join(" ").trim();
}

export function convertToEnglish(inputText) {
  const letterArray = inputText.split(" ").map((letter) => {
    switch (letter) {
      case ".-":
        return "A";
      case "-...":
        return "B";
      case "-.-.":
        return "C";
      case "-..":
        return "D";
      case ".":
        return "E";
      case "..-.":
        return "F";
      case "--.":
        return "G";
      case "....":
        return "H";
      case "..":
        return "I";
      case ".---":
        return "J";
      case "-.-":
        return "K";
      case ".-..":
        return "L";
      case "--":
        return "M";
      case "-.":
        return "N";
      case "---":
        return "O";
      case ".--.":
        return "P";
      case "--.-":
        return "Q";
      case ".-.":
        return "R";
      case "...":
        return "S";
      case "-":
        return "T";
      case "..-":
        return "U";
      case "...-":
        return "V";
      case ".--":
        return "W";
      case "-..-":
        return "X";
      case "-.--":
        return "Y";
      case "--..":
        return "Z";
      case "/":
        return " ";
    }
  });
  return letterArray.join("").trim();
}
// let updateText = document.getElementById("updateOnTranslation");
// document.getElementById("myForm").addEventListener("input", function (event) {
//   event.preventDefault();

//   let inputText = document.getElementById("inputText").value.trim();
//   let outputTextElement = document.getElementById("outputText");
//   const letterRegex = /[a-zA-Z]/;
//   // let updateText = document.getElementById("updateOnTranslation");

//   if (letterRegex.test(inputText)) {
//     outputTextElement.textContent = convertToMorseCode(inputText);
//     updateText.innerHTML = "Translating to Morse code";
//   } else {
//     outputTextElement.textContent = convertToEnglish(inputText);
//     updateText.innerHTML = "Translating to English";
//   }
// });

// document.getElementById("clear").addEventListener("click", function () {
//   document.getElementById("inputText").value = "";
//   document.getElementById("outputText").innerHTML = "";
//   updateText.innerHTML = "";
// });
