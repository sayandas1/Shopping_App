//Map: Calls a defined callback function on each element of an array, and returns an array that contains the results.

let arr=[34,56,78,90,34,56,21,57,93];
let mapped=arr.map(n=>n*3/2);
console.log(mapped);

//Filter: Returns the elements of an array that meet the condition specified in a callback function.

let students=[{
        name:"Ravi",
        class:12,
        roll:23
    },{
        name:"Raj",
        class:10,
        roll:28
    },{
        name:"Rahul",
        class:12,
        roll:29
    }]
let filteredStd = students.filter(value => value.class===12);
console.log(filteredStd);