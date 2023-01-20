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



function generatePassword(){
    var passwordReturn = [];
    var userLength = window.prompt("How long would you like to make your password?");
    
  
    if (userLength > 8 && userLength < 128) {
    var useNumbers = confirm("Include numbers in your password?");
    var useUpperCase = confirm("Include uppercase letters in your password?");
    var useLowerCase = confirm("Include lowercase letters in your password?");
    var useSpecial = confirm("Include special character in your password?");
     
    if (useNumbers || useUpperCase || useLowerCase || useSpecial){
      var allPossibleCharacters = [];
  
     if (useNumbers){
      allPossibleCharacters = allPossibleCharacters.concat(numberValues);
     }
  
     if (useUpperCase) {
      allPossibleCharacters = allPossibleCharacters.concat(uppercaseValues);
     }

     if (useLowerCase) {
        allPossibleCharacters = allPossibleCharacters.concat(lowercaseValue);
       }
  
     if (useSpecial) {
      allPossibleCharacters = allPossibleCharacters.concat(specialValues);
     }
  
     for (var i=0; i< userLength; i++){
      var randomIndex = Math.floor(Math.random() * allPossibleCharacters.length);
  
      passwordReturn.push(allPossibleCharacters[randomIndex]);
     }
  
     return passwordReturn.join("");
     } else {
       return "Please select at least one possible set of characters";
     }
     } else {
        return "Please make length between 8 and 128 characters";
      }
    };
  
  
  
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  