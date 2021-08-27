
var a= 100;

console.log(a);

function f1() {
    console.log(a);
    a= 200;
}

function f2() {
    console.log(a);
}

function f3() {
    console.log(a);
}

f1();
f2();
f3();