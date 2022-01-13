// array.every() method checks if every array value pass a test.
var num = [14,13,3,1,6];
var newNum = num.every(test);

function test(value){
    return value < 18;
}
console.log(newNum);

var num1 = [12,45,67,23,53];
var newNum1 = num1.every(test1);

function test1(value){
    return value > 20;
}
console.log(newNum1);