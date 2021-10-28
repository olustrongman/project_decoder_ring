const expect = require("chai").expect
const caesarModule = require("../src/caesar.js") 


describe("caesar()", () => {
    it("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
  const input = "thinkful";
  const shift = 0; 
  const actual = caesarModule.caesar(input, shift); 
  const expected = false; expect(actual).to.eql(expected);
    });
    
    it("it maintains spaces and other nonalphabetic symbols in message, before and after encoding or decoding", () => {
        const expected = 'bpqa qa i amkzmb  umaaiom!'
        const actual = caesarModule.caesar("This is a secret  message!", 8)
        expect(actual).to.equal(expected);
    });
  
    it("Capital letters can be ignored", () => {
        const expected = 'wklqnixo'
        const actual = caesarModule.caesar("thinKfUL", 3)
        expect(actual).to.equal(expected);
    });
  
     it("If a letter is shifted so that it goes off the alphabet (e.g. a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g. z becomes c)", () => {
        const expected = 'this is a secret message!'
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        expect(actual).to.equal(expected)
    });
}) 


