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

