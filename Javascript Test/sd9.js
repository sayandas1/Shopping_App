//for in : The for in statement iterates over all enumerable properties of an object that are keyed by strings, including inherited enumerable properties.


let person = [{
    p_name: "ABC", p_age: 24, p_place: "KOL"
}, {
    p_name: "BCD", p_age: 29, p_place: "MUM"
}, {
    p_name: "CDE", p_age: 22, p_place: "CHE"
}, {
    p_name: "DEF", p_age: 44, p_place: "DEL"
}];

for (let x in person) {
    console.log("Index:", x, "Person Name:", person[x].p_name);
}

//for of: It iterates over all the elements in an array.

for(let element of person){
    console.log(element);
}

//for: It has 3 statements. -> 1. Initialize 2. Condition 3. Increment/Decrement

for(let i = 0; i<=7; i++){
    console.log(person[1].p_name);
}