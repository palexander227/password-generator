// Assignment Code

//variables used to track user supplied information

var passwordLength;
var includeNumbers;
var includeCharacters;
var includeUppercase;
var includeLowercase;

/*Strings of characters and numbers to be used to build the "random" password. 
Two copies of the the digits were added to make selection probabilities a bit more homogeneous as
per selection criteria. Note: this has no effect if only numeric data is selected.*/

characterString = "!#$%^&*()_-+=?}{><~;:,";
numberString = "01234567890123456789";
alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphaLower = "abcdefghijklmnopqrstuvwxyz";

/*This variable will be used to hold an array of booleans used during the construction of the string
from which random charaters will be selected to form the final password as per user criteria. */
var sel;

function generatePassword(){
    // prompt for user input
    passwordLength = parseInt(prompt("Select password length. Choose a positive integer between 8 and 128 inclusive."));
    //test for nonsense
    if (!passwordLength){
      alert("This needs a valid input.");
    } else if (passwordLength < 8 || passwordLength > 128){
      passwordLength = parseInt(prompt("That was not a valid option. Please select an integer BETWEEN 8 and 128 inclusive."));
    } else {
      includeNumbers = confirm("Include digits 0 - 9 ?");
      includeCharacters = confirm("Include non-alpha-numeric characters like $, % etc. ?");
      includeUppercase = confirm("Include UPPER CASE letters?");
      includeLowercase = confirm("Include lower case letters?");
    }

    //What if all the above evaluate to false?

    var decide = false;

    if(!(includeNumbers||includeCharacters||includeUppercase||includeLowercase)){
         decide = confirm("You must enter an integer password length between 8 and 128 inclusive and select 'ok' to at least one of the choices of 'character type'. Do you wish to start again?");
    } 

    /*If the above confirm yields decide = true, we will repeat from line 24 and line 50 will be 
    ignored on the second run, otherwise move on to construct the string to "sample" from.*/

    if(decide){generatePassword();}

    var sel = [includeNumbers,includeCharacters,includeUppercase,includeLowercase];

    //chStr is initially empty. At this point we know at least one of the entries of sel is true.

    var chStr = "";

    if (sel[0]){chStr = chStr + numberString;};
    if (sel[1]){chStr = chStr + characterString;};
    if (sel[2]){chStr = chStr + alphaUpper;};
    if (sel[3]){chStr = chStr + alphaLower;};

    function getRandomInt(max){
      return Math.floor(Math.random()*max);
    }

    var pwdSt ="";
    var k = 0;

    while ( k < passwordLength){
      pwdSt = pwdSt + chStr.charAt(getRandomInt(chStr.length));
      k++;
    }
  return pwdSt;
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
