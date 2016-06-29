
import should  from 'should';
import Something, { AnotherThing } from '../src/something';

const something = new Something();
const anotherthing = new AnotherThing();

describe('create-instances', () => {

  it('should say Something', done => {

    something.name.should.equal('Something');
    something.name = 'Hans';
    something.name.should.equal('Hans');
    anotherthing.name.should.equal('AnotherThing');

    done();
  });

});
