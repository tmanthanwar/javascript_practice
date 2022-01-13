var array =["ram","ram","kiran","rajesh","rajesh","annil","kiran"];
var newArray = [];
for(i=0; i<array.length;i++){
    if(newArray.includes(array[i])){
        continue;
    }
    else{
        newArray.push(array[i]);
    }
}
console.log(newArray);