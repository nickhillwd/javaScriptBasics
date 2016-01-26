// name in global scope
var name = "Jay";

var talk = function(){
  // now name is in local scope
  var name = "Rick";
  console.log("How is the friends box set " + name + "?");
}

talk();

console.log("--------------------")

console.log("The global name is: " + name);

console.log("--------------------")

//closures

var greet = function(isHappy){
  var text = "";

  if(isHappy){
    text = ("Hello my friend");
  }else{
    text = ("Thump!");
  }

  var displayText = function(){
    console.log(text);
  }

  displayText();

}

greet(true);

console.log("--------------------")













