var arra = [3,6,4,2,8];

var text = "";

var newArray = arra.forEach(multi);

function multi(value) {
    return text += value*2;
}
console.log(text);
