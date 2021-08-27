var customer = {
    name : 'ravi' ,
    accountNumber : 12345669,
    balance : 90000,
    cards : ['credit card', 'debit card'],
    address : {
        city : 'nashik' ,
        state : 'maharashtra',
    },
    getCustemorDetails: function() {
        return this.name+"\n"+ this.accountNumber+"\n"+this.balance;
    }
     
}

console.log(customer.name);
console.log(customer.address.city);
console.log(customer.balance);
console.log(customer.getCustemorDetails());