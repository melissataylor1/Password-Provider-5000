// Assignment Code
// Targets generate password button
var generateBtn = document.querySelector("#generate"); 

//Lowercase letters array
var lowercaseValues = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Uppercase letters array
var uppercaseValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//Numbers array
var numberValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//Special characters array
var specialValues = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '{', '}', '~'];

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //This is where generated password will display on screen
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
// When user clicks button, it will generate writePassword function
generateBtn.addEventListener("click", writePassword); 

function generatePassword() {
    // Ask four user Input
    passwordLength = window.prompt("Please choose a password length between 8 and 128 total characters");
    console.log("Password length " + passwordLength);
  
    if(!passwordLength) {
      alert("Required ");
  
    } else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Please choose a password length BETWEEN 8 and 128 total characters");
      console.log("Password length " + passwordLength);
  
    } else { 
      confirmLower = confirm("Lowercase characters in your password? Click YES to include or CANCEL to not include");
      console.log("Lower case " + confirmLower);
      confirmUpper = confirm("Uppercase characters in your password? Click YES to include or CANCEL to not include");
      console.log("Upper case " + confirmUpper);
      confirmNumber = confirm("Numbers in your password? Click YES to include or CANCEL to not include");
      console.log("Number " + confirmNumber);
      confirmSpecial = confirm("Special characters in your password? Click YES to include or CANCEL to not include");
      console.log("Special Character " + confirmSpecial);
  
    };

}


