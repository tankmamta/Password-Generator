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
var upperCasedCharacters = [
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

// prompt asking the length of password.



// let lowwerCaseCha = prompt("Would you like Lower Case characters in you Password?");

// let upperCaseCha = prompt("Would you like Upper Case characters in your Password?");

// let numericCha = prompt("Would you like Numeric characters in your Password?");

// let specialCha = prompt("Would you like Special characters in your Password?");

let passwordLength = 0;

function getPasswordLength () { 
  
  passwordLength = parseInt( prompt(
    "What length you want your password to be? Please choose a number bewteen 10 - 64! PLease retry"
  )); 
    if (Number.isNaN(passwordLength)) {
      alert ("Password length has to be a Number! Please choose a number bewteen 10 - 64!");
      getPasswordLength();
    }
    if (passwordLength < 10 || passwordLength > 64) {
      alert ("Password length has be a Number between 10 - 64! Please retry");
      getPasswordLength();
    }
}
// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  getPasswordLength();
  console.log("Password length = " , passwordLength);
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
