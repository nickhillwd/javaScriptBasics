var pets = ["dog","cat","slug",];

for(var i = 0; i < pets.length; i++){
  console.log(pets[i]);
}

console.log("--------------------");

for(pet in pets){
  console.log(pets[pet])
}

console.log("--------------------");

var person = {
  name: "Nick",
  age: 28
}

//returns key AND value in an object

for(var property in person){
  console.log(property + ": " + person[property]);
}

console.log("--------------------");

var i = 0;

while(i < 10){
  i++;
  console.log(i);
}