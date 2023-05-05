// Assign button element to variable
var generateBtn = document.querySelector("#generate");

// Generates a password based on user inputs
function generatePassword(passLength, incLowerCase, incUpperCase, incNumbers,incSpecial) {

  // Define strings containing each type of character
  var LowerCase = "abcdefghijklmnopqrstuvwxyz";
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Numbers = "0123456789";
  var Special = "!!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Create a string of chracters based on user inputs
  var characters = "";

  // if user selects Lowercase letters, add them to the character string
  if (incLowerCase) {
    characters += LowerCase;
  }
  
  // if user selects Uppercase letters, add them to the character string
  if (incUpperCase) {
    characters += UpperCase;
  }

  // if user selects numbers, add them to the character string
  if (incNumbers) {
    characters += Numbers;
  }

  // if user selects special characters, add them to the character string
  if (incSpecial) {
    characters += Special;
  }

  //Generate random password from selected characters
  var password = "";

  for (var i = 0; i <passLength; i++) {
    var randomIndex = Math.floor(Math.random() *characters.length);
    password += characters[randomIndex];
  }

  //Return the generated password
  return password;
}

// Write's password to the #password input
function writePassword() {

  // Prompts user for password length
  var passLength = prompt("How many characters would you like your password to be?")

  // Ensures password length is within specafied range
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Password length must be a number between 8 and 128.");
    return;
  }

  // Prompts user for which character types to include in password 
  var incLowerCase = confirm("Include lowercase letters?")
  var incUpperCase = confirm("Include uppercase letters?")
  var incNumbers = confirm("include numbers?")
  var incSpecial = confirm("Include special characters?")

  // Ensure at least one character type is selected
  if (!incLowerCase && !incUpperCase && !incNumbers && !incSpecial) {
    alert("At least one character type must be selected.");
    return;
  }

  // Generates a password based on user responces
  var password = generatePassword(passLength, incLowerCase, incUpperCase, incNumbers, incSpecial);

  var passwordText = document.querySelector("#password");

  // Writes password to the #Password input
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
