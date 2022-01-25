/* Clouser is the combination of bundle of function(enclosed) with referance to its state. 
Like the Closure gives access to an outer function scope with inner function*/

/*A lexical scope in JavaScript means that a variable defined outside a function 
can be accessible inside another function defined after the variable declaration.*/

function outer(){
    var a = 10, b = 20;
    function inner() {
        console.log(a);
        console.log(b);        
    }
    inner();
}
outer();
