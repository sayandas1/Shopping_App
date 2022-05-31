//Spread Operator: Spread operator joins two or more objects in a single array object. If we assign the same key-value pain in both objects, the last key-value pair should replace the previous one. It also called as object margin.

let obj1={fName:"Sayan",lName:"Das",village:"Rasulpur"}
let obj2={city:"Burdwan",pin:713151,po:"Rasulpur",fName:"Rohit"}
let obj3={phone:123456,hobby:"learn new technology"}

let person={...obj1,...obj2,...obj3};
console.log(person);