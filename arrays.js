var guitars = ["fender", "gibson", "gretsch"];
console.log(guitars);

var drums = new Array();
drums.push("gretsch");
drums.push("yamaha");
console.log(drums);

console.log(drums[0]);

drums.push("cymbol");
console.log(drums[2]);

drums[0] = "new drum";
console.log(drums[0]);

drums[10] = "steel";
console.log(drums)

console.log(drums[8]);

console.log(drums.length);

function removeUndefined(value){
  return value !== undefined;
}
var niceArray = drums.filter(removeUndefined);

console.log(drums.splice(1,2));
//modefies the array
console.log(drums)

console.log(drums.slice(0,3));
//doesnt modify the array
console.log(drums)