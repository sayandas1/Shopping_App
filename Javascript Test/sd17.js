//Default parameter: We assign the default values of the parameters at the beginning. For this it is not arrising optional error.

function myFunc(a=6,b=7,c=9){
    console.log(a+b+c);
}
myFunc(40);

//Rest parameter: The rest parameter syntax allows a function to accept an indefinite number of arguements as an array.

function restFunc(...x){
    return x;
}
console.log(restFunc(12,34,56,78,90,45));