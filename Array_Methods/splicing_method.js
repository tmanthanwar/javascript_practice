var fruit = ["Mango","Banana","kiwi","Apple"];

fruit.splice(2,0,"green-Apple","watermelon");

console.log(fruit);

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed from end.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

fruit = ["Mango","Banana","kiwi","papaya"];
fruit.splice(1,1,"green-apple","watermelon"); 
console.log(fruit);






