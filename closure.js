function outer(){
    var a = 10, b = 20;
    function inner() {
        console.log(a);
        console.log(b);        
    }
    inner();
}
outer();
