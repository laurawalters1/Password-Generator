// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPassword = document.querySelector("#password");
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = [
  "!",
  "@",
  "£",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "/",
  ">",
  "<",
  "_",
  "+",
  "=",
  "-",
  "|",
  ";",
  ":",
  ".",
  "~",
  "`",
  "[",
  "]",
];

generateBtn.addEventListener("click", function () {
  var chosenLength = prompt(
    "How many characters would you like to include in your password?"
  );
  if (chosenLength < 8 || chosenLength > 128) {
    alert("ERROR, Password must contain between 8 and 128 characters");
    return;
  } else {
    var incLower = confirm(
      "Press Ok to include lowercase characters in your password"
    );
    var incUpper = confirm(
      "Press Ok to include uppercase characters in your password"
    );
    var incNumber = confirm(
      "Press Ok to include numerical characters in your password"
    );
    var incSpecial = confirm(
      "Press Ok to include special characters in your password"
    );
  }

  var password = "";
  var charArray = "";
  var charString = "";
  var randomNumber = "";

  if (incLower && incUpper && incNumber && incSpecial) {
    charArray = lowerCase.concat(upperCase, numberChar, specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("luns");
  } else if (incLower && incUpper && incNumber && !incSpecial) {
    charArray = lowerCase.concat(upperCase, numberChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("lun");
  } else if (incLower && incUpper && !incNumber && !incSpecial) {
    charArray = lowerCase.concat(upperCase);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("lu");
  } else if (incLower && !incUpper && !incNumber && !incSpecial) {
    charArray = lowerCase.concat(lowerCase);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("l");
  } else if (!incLower && !incUpper && !incNumber && !incSpecial) {
    alert(
      "ERROR! Please choose at least one character type to generate a password."
    );
  } else if (!incLower && incUpper && incNumber && incSpecial) {
    charArray = upperCase.concat(numberChar, specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("uns");
  } else if (!incLower && !incUpper && incNumber && incSpecial) {
    charArray = numberChar.concat(specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("ns");
  } else if (!incLower && !incUpper && !incNumber && incSpecial) {
    charArray = specialChar.concat(specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("s");
  } else if (incLower && !incUpper && !incNumber && incSpecial) {
    charArray = lowerCase.concat(specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("is");
  } else if (!incLower && incUpper && incNumber && !incSpecial) {
    charArray = upperCase.concat(numberChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("un");
  } else if (incLower && !incUpper && incNumber && incSpecial) {
    charArray = lowerCase.concat(numberChar, specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("lns");
  } else if (!incLower && incUpper && !incNumber && !incSpecial) {
    charArray = upperCase.concat(upperCase);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("u");
  } else if (incLower && incUpper && !incNumber && incSpecial) {
    charArray = lowerCase.concat(upperCase, specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("lus");
  } else if (!incLower && !incUpper && incNumber && !incSpecial) {
    charArray = numberChar.concat(numberChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("n");
  } else if (incLower && !incUpper && incNumber && !incSpecial) {
    charArray = lowerCase.concat(numberChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("ln");
  } else if (!incLower && incUpper && !incNumber && incSpecial) {
    charArray = upperCase.concat(specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
    console.log("us");
  }
});
