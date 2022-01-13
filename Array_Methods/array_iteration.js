// Array Iteration using array.forEach()/ call a function once for each array element.
console.log("\n1) array.forEach()")
var array = [45,78,92,74,34,86,23];
var text = "";
var newArray = array.forEach(myFunction);

function myFunction(value){
    text += value ;
}
console.log(text);

// Array Iteration using arrray.map(). / create new array by performing a function on each element.

console.log("\n2) array.map()")
var array1 = [4,6,2,7,9];
var newArray1 = array1.map(myMap);
function myMap(value){
    return value * 2;
}
console.log(newArray1);

// array.filter()/ create new array by array element that passes a test.
console.log("\n3) array.filter()")
var array2 = [45,23,98,16,14,3,19,20];
var newArray2 =array2.filter(myArray2);

function myArray2(value){
    return value < 20;
}
console.log(newArray2);

// array.reduce()/ runs a function on each array element to reduce it into single element.
console.log("\n1) array.reduce()")
var array3 = [10,20,30,15];

var sum = array3.reduce(myArray3);

function myArray3(total,value){
    return total + value;
}
console.log(sum);

// sort alphabetically.
console.log("\n1) array.sort()")
var fruits = ["Mango","Banana","Kiwi","Apple"];
console.log(fruits.sort());

// Numeric Sorting.
console.log("\n4) array.sor() for number");
var num = [40, 100, 1, 5, 25, 10];
var newNum = num.sort(function(a,b){
    return (a - b);
});
console.log(newNum);
newNum = num.sort(function(a,b){return (b - a)});
console.log(newNum); /* this gives wrong ans. as 2is greater than 1 ie. 25 > 100. here.*/

// array.includes - checks whether it includes or not.
console.log("\n1) array.includes()");

var fruits = ["mango","apple","green-apple","papaya"];
var sourFruit = fruits.includes("mango");
console.log(sourFruit);

// array.index - gives the index of array.
console.log("\n1) array.indexOf()");
var flower = ["sunflower","lily","rose"];
var indexOf = flower.indexOf("rose")
console.log(indexOf);

// array.find() - returns the first array element that passes the test.
console.log("\n1) array.find()");

var series = [8,10,12,14,19,25,38];
var test = series.find(greaterThan);

function greaterThan(value){
    return value > 18;
}
console.log(test); /* 43 is first value that is greater than 18.*/

// array.findIndexOf() - returns the index of first element that passes the test.
console.log("\n1) array.findIndex()");
var series1 = [14,18,24,25,29,34,56,74];
var test1 = series1.findIndex(greaterNum);
function greaterNum(value){
    return value >30;
}
console.log(test1);





