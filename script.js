// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
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

// setting variable for the length of password seleted by user

let passwordLength;

function getPasswordLength() {
  passwordLength = parseInt(
    prompt(
      "What length you want your password to be? Please choose a number bewteen 10 - 64! PLease retry"
    )
  );
  // converting password length from string to Number
  if (Number.isNaN(passwordLength)) {
    alert(
      "Password length has to be a Number! Please choose a number bewteen 10 - 64!"
    );
    getPasswordLength();
  }
  // accepting only if the selected length is betwee 10 and 64
  if (passwordLength < 10 || passwordLength > 64) {
    alert("Password length has be a Number between 10 - 64! Please retry");
    getPasswordLength();
  }
}

// creating variables for the options of charaters selected by the user

let lowerCaseCha;

let upperCaseCha;

let numericCha;

let specialCha;

let validCha;

// Function to prompt user for password options
function getPasswordOptions() {
  lowerCaseCha = confirm(
    "Would you like Lower Case characters in you Password?"
  );
  if (lowerCaseCha) {
    validCha = validCha.concat(lowerCasedCharacters);
  }

  upperCaseCha = confirm(
    "Would you like Upper Case characters in your Password?"
  );
  if (upperCaseCha) {
    validCha = validCha.concat(upperCasedCharacters);
  }

  numericCha = confirm("Would you like Numeric characters in your Password?");
  if (numericCha) {
    validCha = validCha.concat(numericCharacters);
  }

  specialCha = confirm("Would you like Special characters in your Password?");
  if (specialCha) {
    validCha = validCha.concat(specialCharacters);
  }

  if (lowerCaseCha === false && 
      upperCaseCha === false &&
      numericCha === false &&
      specialCha === false ){
        alert ("Atleast one character type should be selected. Please retry!");
        getPasswordOptions();
      }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr [Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  validCha = [];
  passwordLength = 0;
  lowerCaseCha = false;
  upperCaseCha = false;
  numericCha = false;
  specialCha = false;

  let randomPassword = "";
  getPasswordLength();
  console.log("Password length = ", passwordLength);
  getPasswordOptions();
  console.log("validCha = " , validCha);
  for (let i = 0; i < passwordLength; i++){
    randomPassword += getRandom(validCha);
  }
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
