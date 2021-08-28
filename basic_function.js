// 4 ways to represent Functions.

// 1) function with parameters and with return type.

    function getScore(htn){
        if (htn == 123){
            return "pass"
        }
        else {
            return "Hall ticket no is incorrect."
        }
    }
    var result = getScore(1231);
  console.log(result);
// 2) function without parameter and with return type.

    function courses(){
        return ["java","c++"];
    }
    getCourse = courses();
    console.log(getCourse);

// 3) function with parameter and without return type.

    function login(username,password){
        if(username == "123" && password == "abc"){
            console.log("login successfull");
        }
        else{
            console.log("login failed");
        }
    }
    login("123","abc");

// 4) function without parameter and without return type.

    function initApp(){
        console.log("load files");
        console.log("load data");
    }
    initApp();

    function inputValue(square){
        result =  square * square;
        console.log(result);
    }
    inputValue(10);

    // to find out arguments;

    
    function myFunction(){
        console.log(arguments);
    }
    myFunction(10,20,30);


    // anonymous function

    function f1(a){
        console.log(a);
        a(10,20);
    }
    f1(function(a,b){
        console.log("this is anonymous function.");
        console.log(a+b);
    })

    // For Each function.
    var array = [10,20,54,67,80];

    array.forEach(function(v,index){
        console.log(index + ":" + v);
    })
    
    // for each function with 2 array.
    var array = [10,20,54,67,80];
    var array2 = ["ravi","kishan","kishor","suraj","mayur"];

    var m = function(v,index){
        console.log(index + ":" + v );
    }

    array.forEach(m);
    array2.forEach(m);


