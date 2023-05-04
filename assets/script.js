// Assign button element to variable
var generateBtn = document.querySelector("#generate");

// Generates a password based on user inputs
function generatePassword(passLg, incLC, incUC, incNum,incSpc) {

  // Define strings containing each type of character
  var LC = "abcdefghijklmnopqrstuvwxyz";
  var UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Num = "0123456789";
  var SC = "!!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Create a string of chracters based on user inputs
  var characters = "";

  // if user selects Lowercase letters, add them to the character string
  if (incLC) {
    characters += LC;
  }
  
  // if user selects Uppercase letters, add them to the character string
  if (incUC) {
    characters += UC;
  }

  // if user selects numbers, add them to the character string
  if (incNum) {
    characters += Num;
  }

  // if user selects special characters, add them to the character string
  if (incSpc) {
    characters += SC;
  }

  //Generate random password from selected characters
  var password = "";

  for (var i = 0; i <passLg; i++) {
    var randomIndex = Math.floor(Math.random() *characters.length);
    password += characters[randomIndex];
  }

  //Return the generated password
  return password;
}

// Write's password to the #password input
function writePassword() {

  // Prompts user for password length
  var passLg = prompt("How many characters would you like your password to be?")

  // Ensures password length is within specafied range
  if (passLg < 8 || passLg > 128) {
    alert("Password length must be between 8 and 128.");
    return;
  }

  // Prompts user for which character types to include in password 
  var incLC = confirm("Include lowercase letters?")
  var incUC = confirm("Include uppercase letters?")
  var incNum = confirm("includ numbers?")
  var incSpc = confirm("Include special characters?")

  // Ensure at least one character type is selected
  if (!incLC && !incUC && !incNum && !incSpc) {
    alert("At least one character type must be selected.");
    return;
  }

  // Generates a password based on user responces
  var password = generatePassword(passLg, incLC, incUC, incNum, incSpc);

  var passwordText = document.querySelector("#password");

  // Writes password to the #Password input
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
