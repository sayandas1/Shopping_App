//Concat method: It joins two or more strings and returns a new string.

let str1 = "Sayan";
let str2 = "Das";
console.log(str1.concat(str2));

//Reduce method: Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

function restFunc(...x) {
    return x.reduce((a, b) => a * b);
}
console.log(restFunc(3, 5, 9));