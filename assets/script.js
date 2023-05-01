// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passLg = prompt("How many characters would you like your password to be?")
  var incLC = confirm("Include lowercase letters?")
  var incUC = confirm("Include uppercase letters?")
  var incNum = confirm("includ numbers?")
  var incSpc = confirm("Include special characters?")

  var password = generatePassword(passLg, incLC, incUC, incNum, incSpc );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
