const Nightmare = require('nightmare');
const nightmare = Nightmare( {show: true} );

const expect = require('chai').expect;

describe("Loading google", function() {

  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  });

  it("Should load the page", done => {
    nightmare
      .goto('https://www.google.com')
      .end()
      .then(function(result) { done() })
      .catch(done);
  });
});

