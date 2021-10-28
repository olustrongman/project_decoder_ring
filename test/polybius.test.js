// Write your tests here!
const expect  = require("chai").expect;
const polybiusModule = require("../src/polybius.js"); 

describe("polybius()", () => { 
 it("When encoding, it translates the letters i and j to 42", () => {
        const expected = "4432423352125413"
        const actual = polybiusModule.polybius("thinkful") 
        expect(actual).to.equal(expected)
}); 
  
  it("When decoding, it translates 42 to (i/j) ", () => {
    const expected = "th(i/j)nkful"
    const actual = polybiusModule.polybius("4432423352125413", false)
    expect(actual).to.equal(expected)
  });
         
 it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
   const expected = '3251131343 2543241341'
   const actual = polybiusModule.polybius("Hello world")
   expect(actual).to.equal(expected) 
 })

  it("It maintains spaces in the message, before and after encoding or decoding", () =>  {
    const expected = "hello world"
    const actual = polybiusModule.polybius("3251131343 2543241341", false) 
    expect(actual).to.equal(expected)
  }) 
  
  
});