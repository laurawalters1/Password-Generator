// Assignment Code
// Assigning variables to html elements
var generateBtn = document.querySelector("#generate");
var newPassword = document.querySelector("#password");
// Assigning character arrays of each type to separate variables
var lowerCaseChar = [
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
var upperCaseChar = [
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

// Assigning empty variables to be used in my function
var password = "";
var charArray = "";
var charString = "";
var randomNumber = "";

// Adding event listener to the html button element, so that on the click event the following function will run
generateBtn.addEventListener("click", function () {
  // The following enables the user to specify password length
  var chosenLength = prompt(
    "How many characters would you like to include in your password?"
  );
  // Below specifies min and max password lengths and ends the function if requirements aren't met
  if (chosenLength < 8 || chosenLength > 128) {
    alert("ERROR! Password must contain between 8 and 128 characters");
    return;
  } else {
    // The follwing allows the user to select character types for their password
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

  // if statements that generate passwords depending on user unput are below
  if (incLower && incUpper && incNumber && incSpecial) {
    // Char array concatenates the relevant arrays based on user input
    charArray = lowerCaseChar.concat(upperCaseChar, numberChar, specialChar);
    // Char string converts the array to an unseparated string so that the charAt() method can be used later
    charString = charArray.join("");
    // For loop beginning at 0, that will continue as long as i is less than or equal to chosenLength - 1
    // (this is because as the produced string will not be 0 indexed as the for loop is, so if we were to
    // leave out the - 1, the user would recieve a password 1 char longer than intended) and i will increase
    // by one after each loop
    for (var i = 0; i <= chosenLength - 1; i++) {
      // each loop produces a random character, which is generated using Math and assigned to a character
      // using charAt, these are added to the var password on each loop
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    // the var newPassword is assigned the value of password, causing the generated password
    // to display to the user
    newPassword.textContent = password;
  } else if (incLower && incUpper && incNumber && !incSpecial) {
    charArray = lowerCaseChar.concat(upperCaseChar, numberChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
  } else if (incLower && incUpper && !incNumber && !incSpecial) {
    charArray = lowerCaseChar.concat(upperCaseChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
  } else if (incLower && !incUpper && !incNumber && !incSpecial) {
    charArray = lowerCaseChar.concat(lowerCaseChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
  } else if (!incLower && !incUpper && !incNumber && !incSpecial) {
    alert(
      "ERROR! Please choose at least one character type to generate a password."
    );
  } else if (!incLower && incUpper && incNumber && incSpecial) {
    charArray = upperCaseChar.concat(numberChar, specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
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
  } else if (incLower && !incUpper && !incNumber && incSpecial) {
    charArray = lowerCaseChar.concat(specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
  } else if (!incLower && incUpper && incNumber && !incSpecial) {
    charArray = upperCaseChar.concat(numberChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
  } else if (incLower && !incUpper && incNumber && incSpecial) {
    charArray = lowerCaseChar.concat(numberChar, specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
  } else if (!incLower && incUpper && !incNumber && !incSpecial) {
    charArray = upperCaseChar.concat(upperCaseChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
  } else if (incLower && incUpper && !incNumber && incSpecial) {
    charArray = lowerCaseChar.concat(upperCaseChar, specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
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
  } else if (incLower && !incUpper && incNumber && !incSpecial) {
    charArray = lowerCaseChar.concat(numberChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
  } else if (!incLower && incUpper && !incNumber && incSpecial) {
    charArray = upperCaseChar.concat(specialChar);
    charString = charArray.join("");

    for (var i = 0; i <= chosenLength - 1; i++) {
      randomNumber = charString.charAt(
        Math.floor(Math.random() * charArray.length)
      );
      password += randomNumber;
    }
    newPassword.textContent = password;
  }
});
