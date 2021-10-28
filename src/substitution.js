// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
function checkForDuplicates(array) {
    let valuesAlreadySeen = [];
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      if (valuesAlreadySeen.indexOf(value) !== -1) {
        return true;
      }
      valuesAlreadySeen.push(value);
    }
    return false;
  }
 function substitution(input, alphabet, encode = true) { 
   input = input.toLowerCase()
  const regAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();

  if (!alphabet) {
    
    return false;
  }
  if (alphabet.length !== 26) {
    
    return false;
  }
  if (checkForDuplicates(alphabet) === true) {
    
    return false;
  }

  
  const decodeKey = {};
  for (let i = 0; i < alphabet.length; i++) {
    const decodeLetter = alphabet[i];
    const regLetter = regAlpha[i];
    decodeKey[decodeLetter] = regLetter;
  }

  
  const encodeKey = {};
  for (let i = 0; i < alphabet.length; i++) {
    const regLetter = regAlpha[i];
    const encodeLetter = alphabet[i];
    encodeKey[regLetter] = encodeLetter;
  }

  let message = "";

  
  if (encode === true) {
    for (let i = 0; i < input.length; i++) {
    
      const char = input[i];

     
      if(char === ' ') {
        message += char;
      } else {
        
        const encodedChar = encodeKey[char];
        message += encodedChar;
      }
    }
    return message;
  }

 
  if (encode === false) {
    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      
      if(char === ' ') {
        message += char;
      } else {
        
        const decodedChar = decodeKey[char];
        message += decodedChar;
      }
    }
  }
 
  return message;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
