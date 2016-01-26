//function decleration (not in a variable)

function hello(name){
  console.log(name + " Hello");
}

hello("nick");

console.log("--------------------")

function add(a,b){
  return a + b;
}

console.log(add(10,20));

console.log("--------------------")

function mood(name, mood, weather){
  console.log(name + " why are " + mood + " about the weather being " + weather + "?");
}

mood("Nick", "Extatic", "windy");

console.log("--------------------")

function sum(){
  var i = 0;
  var total = 0;
  for(i = 0; i < arguments.length; i++){
    total += arguments[i];
  }
  return total;
}

console.log(sum(1,2,3));
//arguments represents an array

console.log("--------------------")

//function inside a variable
//function expression (inside a variable)

var hello = function (){
  console.log("Hello");
}

hello();

console.log("--------------------")

//add function rewritten as an expression

var add = function(a,b){
  return a + b;
}

var subtract = function(a,b){
  return a - b;
}

console.log(add(10,20));

console.log("--------------------")

var wow = function(functionToInvoke){
  return(functionToInvoke(2,1));
}

console.log("add: " + wow(add));
console.log("subtract: " + wow(subtract));













