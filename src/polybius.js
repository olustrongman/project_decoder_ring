// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


 const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const alphabets = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I/J", "K"],
    ["L", "M", "N", "O", "P"],
    ["Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"]
  ];
  
  function polybiusEncode(input) {
    
    let result = "";
    
    for(let letter in input) {
      
      if(input[letter].includes(" ")){
        result += input[letter];
      };
     
      for(let numberOne = 0; numberOne < alphabets.length; numberOne++) {
        
        let match = alphabets[numberOne];
        
        for(let numberTwo = 0; numberTwo < match.length; numberTwo++){
         
          if(match[numberTwo].toLowerCase().includes(input[letter].toLowerCase())) {
            result += numberTwo + 1;
            result += numberOne + 1;
          } 
        }
      }
    }
    return result;
  }
 
  function polybiusDecode(input) {
    
    let solution = "";
   
    for(let i = 0; i < input.length -1; i+=2) {
      
      if(input[i].includes(" ")){
        solution += input[i];
        i--;
      } else {
        
        let newLetter = alphabets[(input[i+1]-1)][(input[i]-1)];
       
        if(newLetter === "I/J") { 
          newLetter = "(" + newLetter + ")";
          solution += newLetter
        } else {
          solution += newLetter;
        }
      }
    }
    return solution.toLowerCase();
  }
    
  function polybius(input, encode = true) { 
   
    if(encode === true){
      return polybiusEncode(input);
    } else {
      
      let counter = 0;
      
      for(let i in input) {
        if(input[i] === " "){
          counter += 1;
        };
      }
      if((input.length - counter) % 2 === 1) {
        return false;
      }
      
      return polybiusDecode(input);
    };
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
