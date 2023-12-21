// Assignment Code
var generateBtn = document.querySelector("#generate");

// character choices

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '+', '/', '%', '#', '^', '$', '?', '-', '_', ',', '~', "&" ];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//added options for the user and conditional statments
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length from 8 to 128 characters");
    var askuppercase = confirm("Do you want the password to have uppercase letters?");
    var asklowercase = confirm("Do you want the password to have lowercase letters?");
    var asknumbers = confirm("Do you want the password to have numbers?");
    var askspecial = confirm("Do you want the password to have special characters in it?");
    var responses = {
      length: length,
      asklowercase: asklowercase,
      askuppercase: askuppercase,
      asknumbers: asknumbers,
      askspecial: askspecial
    }


  }
}















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
