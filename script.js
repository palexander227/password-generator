// Assignment Code
var passwordLength;
var includeNumbers;
var includeCharacters;
var includeUppercase;
var includeLowercase;

characterString = "!#$%^&*()_-+=?}{\|/;:,";
numberString = "0123456789";
alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphaLower = "abcdefghijklmnopqrstuvwxyz";

var sel;

function generatePassword(){
    // prompt for user input
    passwordLength = parseInt(prompt("Select password length. Choose a positive integer between 8 and 128 inclusive."));
    //test for nonsense
    if (!passwordLength){
      alert("This needs a valid input.");
    } else if (passwordLength < 8 || passwordLength > 128){
      passwordLength = parseInt(prompt("Please select an integer BETWEEN 8 and 128 inclusive."));
    } else {
      includeNumbers = confirm("Include digits 0 - 9 ?");
      includeCharacters = confirm("Include non-alpha-numeric characters like $, % etc. ?";
      includeUppercase = confirm("Include UPPER CASE letters?");
      includeLowercase = confirm("Include lower case letters?");
    };

    //What if all the above evaluate to false?

    var decide = false;

    if(!(includeNumbers||includeCharacters||includeUppercase||includeLowercase)){
         decide = confirm("You must select at least one. Do you wish to start again?");
    }; 

    if(decide){generatePassword};

    var sel = [includeNumbers,includeCharacters,includeUppercase,includeLowercase];

    var chStr = "";

    if (sel[0]){chStr = chStr + numberString;};
    if (sel[1]){chStr = chStr + characterString;};
    if (sel[2]){chStr = chStr + alphaUpper;};
    if (sel[3]){chStr = chStr + alphaLower;};

}






var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
