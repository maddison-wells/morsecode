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
        case "0":
          return "-----";
        case "1":
          return ".----";
        case "2":
          return "..---";
        case "3":
          return "...--";
        case "4":
          return "....-";
        case "5":
          return ".....";
        case "6":
          return "-....";
        case "7":
          return "--...";
        case "8":
          return "---..";
        case "9":
          return "----.";
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
      case "-----":
        return "0";
      case ".----":
        return "1";
      case "..---":
        return "2";
      case "...--":
        return "3";
      case "....-":
        return "4";
      case ".....":
        return "5";
      case "-....":
        return "6";
      case "--...":
        return "7";
      case "---..":
        return "8";
      case "----.":
        return "9";
      case "/":
        return " ";
    }
  });
  return letterArray.join("").trim();
}
