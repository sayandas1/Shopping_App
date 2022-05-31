//Difference between == and === : Both are comparison opeartor, but == checks the value is same or not and === checks the value with the data type.

let num1 = 5;
if(num1 == "5"){
    console.log("true");
}else{
    console.log("false");
}
//returns true

let num2 = 8;
if(num2 === "8"){
    console.log("true");
}else{
    console.log("false");
}
//returns false