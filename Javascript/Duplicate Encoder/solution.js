function duplicateEncode(word) {
  //split and lower case the word into an array so we can manipulate it better
  let wordArray = word.toLowerCase().split("");

  //create an object that will have a property for each letter in the word, with the value being the amount of occurances
  const charCount = {};

  // this is how we count the occurances of each letter in the array
  // if the object has a property for that letter already, we increase it's value by 1
  // if the object does not have a property for that letter, we set that letter to = 1
  wordArray.forEach(function (char) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  });

  // we now create a variable for our answer
  // we map over the wordArray, which currently holds the letters of the original word
  // each letter will be evaluated against the object to determine if that letter has a value equal to 1
  // letters in the wordArray that are = 1 will populate a ( in the new variable, resultArray
  // letters in the wordArray that are not = 1 will populate a ) in the resultArray
  const resultArray = wordArray.map(function (char) {
    return charCount[char] === 1 ? "(" : ")";
  });

  // the challenge demands a string rather than an array, so .join does that. Return the string and boom
  return resultArray.join("");
}
