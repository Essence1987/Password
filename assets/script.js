// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(passLg, incLC, incUC, incNum,incSpc) {

  var LC = "abcdefghijklmnopqrstuvwxyz";
  var UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Num = "0123456789";
  var SC = "!!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var characters = "";

  if (incLC) {
    characters += LC;
  }
  
  if (incUC) {
    characters += UC;
  }

  if (incNum) {
    characters += Num;
  }

  if (incSpc) {
    characters += SC;
  }

  var password = "";

  for (var i = 0; i <passLg; i++) {
    var randomIndex = Math.floor(Math.random() *characters.length);
    password += characters[randomIndex];
  }

  return password;
}
// Write password to the #password input
function writePassword() {

  var passLg = prompt("How many characters would you like your password to be?")
  var incLC = confirm("Include lowercase letters?")
  var incUC = confirm("Include uppercase letters?")
  var incNum = confirm("includ numbers?")
  var incSpc = confirm("Include special characters?")

  var password = generatePassword(passLg, incLC, incUC, incNum, incSpc);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
