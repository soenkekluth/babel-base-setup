export default class Something {

  static DEFAULT_NAME = 'Something';

  constructor(name = Something.DEFAULT_NAME){
    console.log('yeah! ' + name);
    this._name = name;
  }


  get name(){
    return this._name;
  }


  set name(value){
    this._name = value;
  }

  doSomething(){
    const str = 'I DO SOMETHING';
    console.log(str);
    return str;
  }



}


export class AnotherThing extends Something {

  static DEFAULT_NAME = 'AnotherThing';

  constructor(){
    super(AnotherThing.DEFAULT_NAME);
  }

}
