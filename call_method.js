
// Call vs apply:

// Call is used to substitute another object into current object.


var employee1 = {
    name: "Suraj",
    address : "Chandrapur",
    getDetails : function(company,code){
        return this.name + "\t" + this.address + "\t" + company + "\t" + code;
    }
}

var employee2 = {
    name : "Rajesh",
    address : "Nashik",
}

var array = ["Capgemini","KD"]

console.log(employee1.getDetails.call(employee2,array[0],array[1]));

// PS: Create a product object with pid,name, price, getProductDetails and 
// subsitute another object by using call function.

var product1 = {
    pid : 102,
    name : "Water Bottle" ,
    price : 200,
    getDetails : function(colour){
        return this.pid + "\t" + this.name + "\t" + this.price + "\t" +colour ;
    }
}
console.log(product1.getDetails());

var product2 = {
    pid : 103,
    name : "Lunchbox",
    price : 350,
}
var col = ["Red"]
console.log(product1.getDetails.call(product2,col));




