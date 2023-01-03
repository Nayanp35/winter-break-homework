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

function firstNonRepeatingLetter(s) {
  // I first turned all the passing string to lowercase, because the test is case sensitive.
  let lower = s.toLowerCase()
  // I used the for loop to iterate every char in a given string.
  for (let i = 0; i < lower.length; i++) {
    // I used indexOf and lastIndexOf method to check if they return the same index. If they do, return that char. This works because indexOf return the first index from left to right, and lastIndexOf return the first index from right to left. This mean if they both output the same index, that means that char did not repeat. 
    if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
      return s[i];
    }
  }
  return "";
}

function inArray(array1,array2) {
  // I initialized an empty array because in the end I need to return it, either filled with elements or nothing in it.
  let arr = [];
  // I used two nested for loops to iterate over array1 and array2. Then using conditional statement and .include method to check the substring, whether the chars of array1 includes in the array2. If they do, then push the elements of array1 to the returing arr. I used the break to stop checking once the elements is included. This is to avoid repetition element. 
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        arr.push(array1[i]);
        break
      }
    }
  }
  // I used .sort() method because the elements needs to be in alphabetical order.
  return arr.sort();
}

function duplicateCount(text){
  // First, I lowered all passing text to lowerCase because the test is case sensitive and stored in lower variable.
  let lower = text.toLowerCase();
  // I initialized an empty arr because I need to store the true value in it.
  let arr = [];
  // Then, I used for loop to iterate over lower variable and using conditional statement and .indexOf() method, to check wheather their indexes are different. If they are, then push that char in arr array.
  for (let i = 0; i < lower.length; i++) {
    if (lower.indexOf(lower[i]) !== i) {
      arr.push(lower[i]);
    }
  }
  // I used new Set method to remove the dublicates elements and return the length of that array.
  return [...new Set(arr)].length;
}

function findUniq(arr) {
  // same method as firstNonRepeatingLetter();
  for (let num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      return num;
    }
  }
}
function findOutlier(integers) {
  // I initialized two elements, even and odd and used .filter methods to push even numbers in even variable, and odd numbers in odd variables.
  let even = integers.filter(num => num % 2 === 0);
  let odd = integers.filter(num => num % 2 !== 0);
  // Then I used conditional statement to check the length of odd variable. If it is one, then the odd is the outlier, else it's the even one. Since the answer must a number and not an array, I return the first index of that array, which gave me the ourlier number
  if (odd.length === 1) {
    return odd[0];
  }
  return even[0];
}

function likes(names) {
  if (names.length === 0) {
    return `no one likes this`;
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`
  }
  // I used interpolation to return a string depending on the length of names array. In the else statement, I used slice() method to return an array of names that exclude the first two names and return the length of that array. 
}


