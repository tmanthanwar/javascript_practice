// // Call by Referance using Object;

// var obj = {
//     name : "Raju",
//     address : "Nashik",
// };
// function f1(k){
//     k.name = "kiran";
//     console.log(k);
// }
// f1(obj);
// console.log(obj);

// // call by referance using Array;

var x = [1,2,3,4,5];

function f1(m){
    m.pop();  // Pop method - to remove last argument;
    m.push(100); // push to add (here 100) at the end;
    console.log(m);
}
f1(x);
console.log(x);


// call by referance using object;

// var connectNetwork = {
//     ip : "192.168.100.23",
//     username : "Mayur",
//     network : "mayur_net"
// }

// function net(paraNet) {
//     paraNet.ip = "192.168.150.25";
//     paraNet.network = "SAI_net"
// }

// net(connectNetwork);
// console.log(connectNetwork);

// call by referance using object;
var a = 10;

function f1(x) {
    console.log(x);
}
f1(a);
    
var obj = {
    name : "ravi",
    rollNo: "123",
    city : "Pune"
};

function details(obj1) {
    obj1.name = "Suraj";
    obj1.city = "Nashik";
    console.log(obj1);
}
details(obj);
