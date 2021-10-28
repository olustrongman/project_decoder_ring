const expect = require("chai").expect
const substitutionModule = require("../src/substitution.js")


describe("substitution()", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long", () => {
    const expected = false
    const actual = substitutionModule.substitution("thinkful", "short")
    expect(actual).to.equal(expected);
  }) 
  
  it("it correctly translates the given phrase, based on the alphabet given to the function", () => {
    const expected = 'elp xhm xf mbymwwmfj dne'
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev") 
    expect(actual).to.equal(expected);
  }) 
  
  it("it returns false if there are any duplicate characters in the given alphabet", () => {
    const expected = false 
    const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz") 
    expect(actual).to.equal(expected);
  })
  
  it("It maintains spaces in the message, before and after encoding or decoding", () => {
    const expected = 'elp xhm xf mbymwwmfj dne'
    const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev") 
    expect(actual).to.equal(expected);
  }) 
  
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () =>  {
     const expected = "message"
     const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false) 
     expect(actual).to.equal(expected);
  })
  
  
});