const expect = require("chai").expect;
const multiply = require('../Unsolved/src/multiply.js');

describe("My test", () => {
    it("Should multiply two numbers", () => {
        expect(multiply(2, 2)).to.equal(4);
        expect(multiply(2, 3)).to.equal(6);
        expect(multiply(-2, 2)).to.equal(-4);
    });
})
