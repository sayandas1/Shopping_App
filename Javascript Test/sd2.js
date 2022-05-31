//Call: Calls a method of an object, substituing another object for the current object. It takes variable name as an arguement.

let obj = {
    fName: "Sayan",
    lName: "Das",
    address: "Kolkata"
}
function display(x, y) {
    return x + " " + this.fName + " " + this.lName + " " + y + " " + this.address;
}

let show2 = display.call(obj,"I","from");
console.log(show2);

//Bind: For a given function, creates a bound function that has the same body as the original function.It takes function name as an arguement.

let show3 = display.bind(obj, "I", "from");
console.log(show3());
//returns error for console.log(show3);
