var myPerson = {
  name: "Guybrush",
  age: 32,
  weapon: "cutlass"
};

console.log(myPerson);

console.log(myPerson.name);
console.log(myPerson.age);
console.log(myPerson.weapon);

console.log(myPerson["name"]);

var myKey = "name"

console.log(myPerson[myKey]);

// add key and value
myPerson["location"] = "california";

console.log(myPerson);
console.log(myPerson.location);
console.log(myPerson["location"]);

// change a key's value
myPerson["location"] = "Edinburgh";

console.log(myPerson.location)