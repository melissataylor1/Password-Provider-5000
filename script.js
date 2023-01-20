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

function generatePassword(){
    var passwordReturn = [];
    var passwordLength = parseInt(window.prompt("Please choose a password length between 8 and 128 total characters"));

    if (passwordLength > 8 && passwordLength < 128) {
        var useNumbers = confirm("Include numbers in your password?");
        var useUppercase = confirm("Include uppercase letters in your password?");
        var useLowercase = confirm("Include lowercase letters in your password?");
        var useSpecial = confirm("Include special character in your password?");
         
    if (useNumbers || useUppercase || useLowercase || useSpecial){
          var allPossibleCharacters = [];
      
    if (useNumbers){
          allPossibleCharacters = allPossibleCharacters.concat(numberValues);
         }
      
    if (useUppercase) {
          allPossibleCharacters = allPossibleCharacters.concat(uppercaseValues);
         }
    
    if (useLowercase) {
            allPossibleCharacters = allPossibleCharacters.concat(lowercaseValues);
           }
      
    if (useSpecial) {
          allPossibleCharacters = allPossibleCharacters.concat(specialValues);
         }
      
        for (var i=0; i< passwordLength; i++){
          
            var randomIndex = Math.floor(Math.random() * allPossibleCharacters.length);
      
            passwordReturn.push(allPossibleCharacters[randomIndex]);
             }
      
      
        return passwordReturn.join("");
    } else {
      return "Password requires at least ONE character parameter";
    }
    } else {
       return "Invalid. Please submit a NUMERIC value between 8 and 128.";
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
      
