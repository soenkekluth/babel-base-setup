import Something, { AnotherThing } from './something';

const someThing = new Something();
const anotherThing = new AnotherThing();

document.getElementById('output').innerHTML = someThing.name + ' & ' + anotherThing.name;
