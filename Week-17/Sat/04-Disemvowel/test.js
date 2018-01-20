const expect = require('chai').expect;
const disemvowel = require('./disemvowel.js');


describe("Output", () => {
    it("Should return no vowels", () => {
        expect( disemvowel('abcd') ).to.equal('bcd');
        expect( disemvowel('hello') ).to.equal('hll');
        expect( disemvowel('aeiou') ).to.equal('');
    });
});
