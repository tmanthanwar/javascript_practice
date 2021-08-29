var employee1 = {
    name: "Suraj",
    address : "Chandrapur",
    getDetails : function(company,code){
        return this.name + "\t" + this.address + "\t" + company + "\t" + code;
    }
};

var employee2 = {
    name : "Rajesh",
    address : "Nashik",
};

var array = ["Capgemini","KD"];

console.log(employee1.getDetails.apply(employee2,array));

// PS: Create a product object with pid,name, price, getProductDetails and 
// subsitute another object by using call function.

var product1 = {
    pid : 102,
    name : "Water Bottle" ,
    price : 200,
    getDetails : function(colour){
        return this.pid + "\t" + this.name + "\t" + this.price + "\t" +colour ;
    }
};
console.log(product1.getDetails());

var product2 = {
    pid : 103,
    name : "Lunchbox",
    price : 350,
};
var col = ["Red","pink"];
console.log(product1.getDetails.call(product2,col));




