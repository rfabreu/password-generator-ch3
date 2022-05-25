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
var options;
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
  // USER VALIDATION WITH IF STATEMENT
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

  // ELSE IF FOUR NEGATIVE OPTIONS
  if (!verifyLowercase && !verifyUppercase && !verifyNumber && !verifyCharacter) {
    options = alert("Please choose a criteria!");
  }
  // FIRST IF CONDITIONS THAT USES INPUT PROMPTS TO DETERMINE OPTIONS
  // ELSE IF FOUR POSITIVE CHOICES
  else if (verifyLowercase && verifyUppercase && verifyNumber && verifyCharacter) {
    options = specialChar.concat(number, alpha, alphaSec);
  }

  // THREE POSITIVE OPTIONS
  else if (verifyCharacter && verifyNumber && verifyUppercase) {
    options = specialChar.concat(number, alphaSec);
  }
  else if (verifyCharacter && verifyNumber && verifyLowercase) {
    options = specialChar.concat(number, alpha);
  }
  else if (verifyCharacter && verifyLowercase && verifyUppercase) {
    options = specialChar.concat(alpha, alphaSec);
  }
  else if (verifyNumber && verifyLowercase && verifyUppercase) {
    options = number.concat(alpha, alphaSec);
  }

  // TWO POSITIVE OPTIONS
  else if (verifyCharacter && verifyNumber) {
    options = specialChar.concat(number);
  }
  else if (verifyCharacter && verifyLowercase) {
    options = specialChar.concat(alpha);
  }
  else if (verifyCharacter && verifyUppercase) {
    options = specialChar.concat(alphaSec);
  }
  else if (verifyLowercase && verifyNumber) {
    options = alpha.concat(number);
  }
  else if (verifyLowercase && verifyUppercase) {
    options = alpha.concat(alphaSec);
  }
  else if (verifyNumber && verifyUppercase) {
    options = number.concat(alphaSec);
  }

  // ONE POSITIVE OPTION
  else if (verifyCharacter) {
    options = specialChar;
  }
  else if (verifyNumber) {
    options = number;
  }
  else if (verifyLowercase) {
    options = alpha
  }
  // Uppercase conversion will be done by space variable
  else if (verifyUppercase) {
    options = space.concat(alphaSec);
  }
};


// THIS VARIABLE IS A PLACEHOLDER ARRAY FOR USER GENERATED AMOUNT OF LENGTH
var password = [];

// VARIABLES RANDOM SELECTION
for (var i = 0; i < input; i++) {
  var pickOptions = options[Math.floor(Math.random() * options.length)];
  password.push(pickOptions);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("password").textContent = password;
