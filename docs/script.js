// Assignment Code


// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button and write the generated password
function writeGenertaedPassword(){
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword());
}

//store the user input
function getPasswordLength(){
let passwordLength = window.prompt("Chose the length of your pasword ");

    
     while( passwordLength < 8 || passwordLength > 128){
      
      passwordLength = window.prompt("Your password length has to be greater than 8 and less than 128");
    }
    return passwordLength;
}
// check the choice of the critara of charater presented in the passsword
function getCriteria(){

  let meetsCriteria = true;
// the pasword should have at least one of the criateria
while (meetsCriteria){
  var upCa = window.confirm("Do you want Uppercase letters in the password?");
  var numeric = window.confirm("Do you want numbers in the password?");
  var specialChar = window.confirm("Do you want special characters in the password?");
  meetsCriteria = !(upCa || numeric || specialChar);
}
  
return [upCa, numeric, specialChar];
}

// password genration
 function generatePassword(){

  var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var upCase = "ABCDEFGHIJIKLMNOPQRSTUVWXYZ";
  var lowCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";

  // generat the code depends of  the criteria choices of the user and the lenght chosen by the user 
  let passwordlength = getPasswordLength();
  let criteria = getCriteria();
  let password ='';
  for (let i = 0; i < passwordlength ; i++){
    if (i == 0 && criteria[0]) {
      password += upCase.charAt(Math.floor(Math.random() * upCase.length));
      i ++;
    }
    if (i == 3 && criteria[1]) {
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      i ++;
    }
    if (i == 5 && criteria[2]) {
      password += randomSpecialChar ();
      i ++;
    }

    password += lowCase.charAt(Math.floor(Math.random() * passwordlength));
  }

   return password;
 }
// function to generate random special character I did some reserch to find it
 function randomSpecialChar () {
 // example set of special chars as a string in no particular order
  var s = "!\"§$%&/()=?\u{20ac}";

 // generating a random index into the string and extracting the character at that position
  return s.substr(Math.floor(s.length*Math.random()), 1);
} 
