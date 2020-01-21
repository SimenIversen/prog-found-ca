// question 1
var name;
var name = "simen";
// question 2
var person = {
  name: "simen",
  age: 23
};
// question 3
var outOfStock = "true";
if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}
// question 4
var numbers = [2, 23, 30, 41, 26];
for (var i = 0; i < numbers.length ; i++) {
  console.log(numbers[i]);
}
// question 5
for (var i = 15; i <= 25; i++) {
console.log(i);
}
// question 6
for (var i = 15; i <= 25; i++)
{
  if (i === 20) {
    console.log(20);
  }
}
// question 7
var student1 = [
    {
        name:"ole",
        age: 22,
        inClass: true
    }
];
var student2 = [
    {
        name: "trine",
        age: 26,
        inClass: false
    }
];
console.log(student1,student2);

// question 8
function whatIDontLike(arg){
    console.log("I don´t like"+ arg);
}

// question 9

function subtract(nub1, nub2){
    return nub1 - nub2;
}

// question 10

var emptyArray = [];


function addItemToArray(item) {
    emptyArray.push(item);
}

addItemToArray("firstItem");

console.log(emptyArray);

addItemToArray("simen")