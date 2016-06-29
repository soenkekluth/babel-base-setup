
var should  = require('should');
var Something = require('../dist/something').default;
var AnotherThing = require('../dist/something').AnotherThing;

var something = new Something();
var anotherthing = new AnotherThing();

describe('create-instances', () => {

  it('should say Something', done => {

    something.name.should.equal('Something');
    something.name = 'Hans';
    something.name.should.equal('Hans');
    anotherthing.name.should.equal('AnotherThing');

    done();
  });

});
