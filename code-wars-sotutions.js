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

