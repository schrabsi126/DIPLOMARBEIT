export class App {
  message = 'Good Morning';
  isChecked=false;
  isFocus=false;
  firstName='';
  enableMessage=false;
  age={};
  colour={};

  greetMe(){
    alert(`Hi ${this.firstName}! How are you?`)
  }

  constructor(){
    this.age={
      theValue:30
    };
    this.colour={
    theValue:'green'
    };
  }
}
