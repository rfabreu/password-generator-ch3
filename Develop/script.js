// Assignment Code
// SOTRE USER INPUTS
var input;
var verifyNumber;
var verifyCharacter;
var verifyUppercase;
var verifyLowercase;

// PASSWORD VALUES
// ALPHABETICAL VALUES
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// NUMERICAL VALUES
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// SPECIAL CHARACTERS
specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Space for Uppercase conversion
space = [];
// Options declared outside the if statement so the can be concatenated upon condition
var options = [];
// UPPERCASE CHARACTER CONVERSION
var toUpper = function (u) {
  return u.toUpperCase();
}
// UPPERCASE CONVERSION VARIABLE
alphaSec = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");


// PASSWORD GENERATION FUNCTION
function generatePassword() {
  // prompts user input
  input = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128 characters."));
  // USER VALIDATION WITH IF AND ELSE IF STATEMENTS
  if (!input) {
    alert("You need to choose the password length!");
  } else if (input < 8 || input > 128) {
    // user input validation and start prompt
    input = parseInt(prompt("You must choose between 8 and 128. Try again!"));
  } else {
    // TRIGGER AFTER INPUT IS VALIDATED
    verifyLowercase = confirm("If you want Lowercase characters, click OK to continue.");
    verifyUppercase = confirm("Will this contain Uppercase letters? Then click OK to continue.");
    verifyNumber = confirm("Do you want your password to contain numbers? If Yes, click OK to continue.");
    verifyCharacter = confirm("Will this contain special characters? If Yes, click OK to continue.");
  };

  // TUTOR ASSISTED IN ENHANCING THIS SECTION
  // IF FOUR NEGATIVE OPTIONS
  if (!verifyLowercase && !verifyUppercase && !verifyNumber && !verifyCharacter) {
    alert("Please choose a criteria!");
    return
  }
  // IF POSITIVE OPTIONS
  if (verifyLowercase) {
    options = options.concat(alpha);
  }
  if (verifyUppercase) {
    options = options.concat(alphaSec);
  }
  if (verifyCharacter) {
    options = options.concat(specialChar);
  }
  if (verifyNumber) {
    options = options.concat(number);
  }

  // THIS VARIABLE IS A PLACEHOLDER ARRAY FOR USER GENERATED AMOUNT OF LENGTH
  var password = [];
  // VARIABLES RANDOM SELECTION
  for (var i = 0; i < input; i++) {
    var pickOptions = options[Math.floor(Math.random() * options.length)];
    password.push(pickOptions);
  }
  return password.join("")
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);