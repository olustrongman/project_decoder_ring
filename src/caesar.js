// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () { 
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
    if (!shift || shift > 25 || shift < -25 || shift === 0) return false;
    
    let result = '';
    
    if (!encode) {shift *= -1};
    for (let i = 0; i < input.length; i++) {
    
      const inputLetter = input[i].toLowerCase();
      const inputLetterPosition = letters.indexOf(inputLetter);
      let newPosition = inputLetterPosition + shift;
     
      if (!letters.includes(inputLetter)) {
        result += inputLetter;
    
      }
      else if (newPosition < 0) {
        newPosition = (newPosition % 26) + 26;
        result += letters[newPosition];
     
     } else {
        newPosition = newPosition % 26;
        result += letters[newPosition];
      }
    }
    return result;
  }
  
  
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
