//First Order: Function that doesn't accept another function as an arguement and doesn't return a function as return value.

let fname = () =>{
    console.log("this is my first name");
}
fname();

//Higher Order: Function that accepts another function as an argument or returns a function as a return value or both.
 
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  console.log(result);