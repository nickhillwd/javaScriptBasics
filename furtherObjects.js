var myPerson = {
  name: "Guybrush",
  age: 32,
  weapon: "cutlass",
  talk: function(){
    console.log("shiver me timbers, my name is " + this.name);
  }
}

//this is like self in ruby.

console.log(myPerson.name);

myPerson.talk();

// another way of creating an object

var myDog = {};

myDog.smell = "musky";
console.log(myDog);
myDog.talk = function(){
  console.log("I'm a dog and I smell " + this.smell);
}
myDog.talk();

//third way of creating an object

var myCat = Object.create(null);

// multiple bears

function Bear(adjective){
  this.adjective = adjective,
  this.roar =  function(){
    console.log("roar roar roar said " + this.adjective);
  }
}

var hugsyTheBeadtimePal = new Bear("Hugsy The Bedtime Pal");
var cocaCola = new Bear("Coca Cola Bear");

hugsyTheBeadtimePal.roar();
cocaCola.roar();
