// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
function createPhoneNumber(numbers){
  // The phone number has to be in this format. Therefore I initialized the format variable with the format that the phone number needs to be in. 
  let format = '(xxx) xxx-xxxx';
  // Then using for loop, I'm going to replace every "x", with the numbers in an array. 
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}

function squareDigits(num){
  // I need to split the number to square each number, but since split is a string method, I fist need to convert num into string.
  num = num.toString().split("")
  // I used .map to square each number and joined then together and surrounded it by Number() because the answer has to be a number, not a string.
  return Number(num.map(n => n ** 2).join(""))
}



