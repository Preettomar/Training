/*10. Write a JavaScript function that accepts a string as a parameter and
counts the number of vowels within the string.*/
function countVowels(str) {
  let vowels = str.match(/[aeiouAEIOU]/g);
  return vowels ? vowels.length : 0;
}

console.log(countVowels("Welcome")); 