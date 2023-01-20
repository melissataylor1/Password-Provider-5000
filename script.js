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

//Prompting to enter length of password
function generatePassword(){
    var passwordReturn = [];
    var passwordLength = parseInt(window.prompt("Please choose a password length between 8 and 128 total characters"));

    //If password length meets criteria, prompt all other questions
    if (passwordLength > 8 && passwordLength < 128) {
        var useNumbers = confirm("Include numbers in your password?");
        var useUppercase = confirm("Include uppercase letters in your password?");
        var useLowercase = confirm("Include lowercase letters in your password?");
        var useSpecial = confirm("Include special character in your password?");
     
        //If yes to everything, include all possible characters from all arrays in randomize func that generates final password
    if (useNumbers || useUppercase || useLowercase || useSpecial){
          var allPossibleCharacters = [];
      
          //if yes, concacates all values within numbers array and includes them in AllPossibleCharacters 
    if (useNumbers){
          allPossibleCharacters = allPossibleCharacters.concat(numberValues);
         }
      
         //if yes, concacates all values within uppercase array and includes them in AllPossibleCharacters 
    if (useUppercase) {
          allPossibleCharacters = allPossibleCharacters.concat(uppercaseValues);
         }
    
         //if yes, concacates all values within lowercase array and includes them in AllPossibleCharacters 
    if (useLowercase) {
            allPossibleCharacters = allPossibleCharacters.concat(lowercaseValues);
           }
      
        //if yes, concacates all values within special characters array and includes them in AllPossibleCharacters 
    if (useSpecial) {
          allPossibleCharacters = allPossibleCharacters.concat(specialValues);
         }
      
         //randomizes AllPossibleCharacters, makes random selection match chosen length of password
        for (var i=0; i< passwordLength; i++){
          
            var randomIndex = Math.floor(Math.random() * allPossibleCharacters.length);
      
            passwordReturn.push(allPossibleCharacters[randomIndex]);
             }
      
      
        return passwordReturn.join("");

        //If people answer no to every question
    } else {
      return "Password requires at least ONE character parameter";
    }
    //If don't enter a number between 8 and 128 for lenght question aka a letter or number outside of 8 and 128
    } else {
       return "Invalid. Please submit a NUMERIC value between 8 and 128.";
     }
   };
      
      
      // Write password to the #password input
       // For when generate password is done
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        //final password outcome,  derived from generatePassword function
        passwordText.value = password;
        
      }
      
      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
    