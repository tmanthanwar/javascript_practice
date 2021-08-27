var product = {
    name : "boAt Rockerz 255F Pro+ Bluetooth Headset" ,
    ratings : 50650 ,
    reviews : 5441 ,
    price : 1499 ,
    colour : ['active black','tale green', 'navy blue'] ,
    hightlights : 
       ['With Mic:Yes ', 
        '\nBluetooth version: 5',
        '\nWireless range: 10 m ',
        '\nBattery life: 40 hrs',
        '\nType-c Charging',
        '\nASAP Charge: 10 mins charge= 10 hours playback',
        '\nIPX7: Water and Sweat Resistant'],
    Seller : ['SuperComNet4.6',
              '\n7 Days Replacement Policy',
              '\nGST invoice available'], 
    getProductDetails: function() {
        return this.name + "\n" + this.price + "\n" + this.ratings + "\t " + this.reviews + "\n" + this.colour + "\n" + this.hightlights + "\n" + this.Seller; 
    }
}

console.log(product.name);
console.log(product.colour);
console.log(product.hightlights);
console.log(product.price);
console.log(product.ratings);
console.log(product.reviews);
console.log(product.getProductDetails());
