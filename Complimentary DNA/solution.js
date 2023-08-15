function DNAStrand(dna) {
  // create an empty string to hold the new string

  let result = "";

  // loop through the input, set character variable to be the character at the looping index value

  for (let i = 0; i < dna.length; i++) {
    let character = dna.charAt(i);

    // go through each character as looping, and switch each character accordingly

    switch (character) {
      case "A":
        result += "T";
        break;
      case "T":
        result += "A";
        break;
      case "C":
        result += "G";
        break;
      case "G":
        result += "C";
        break;
      default:
        result += character;
    }
  }

  // return result

  return result;
}
