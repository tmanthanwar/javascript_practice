// print no. 1 - 9

// for(i=0; i< 10; i++){
//     console.log(i);
// }

// print array by removing repeated name

var array = ["raju", "kiran", "suraj", "kiran","ravi", "mayur", "raju"] ;
var newArray = [];

for(i=0; i< array.length; i++){
    if(newArray.includes(array[i])){
        continue
    }
    newArray.push(array[i]);
}
console.log(newArray);