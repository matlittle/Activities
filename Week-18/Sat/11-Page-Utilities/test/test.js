const expect = require('chai').expect;
const multiply = require('../src/multiply.js');

describe("Universe", () => {
    it("Should be fine", () => {
        expect(2).to.equal(2);
    });

    it("Should throw an error", () => {
        expect( function() {
            multiply("1", 2);
         } ).to.throw();
    });
});
