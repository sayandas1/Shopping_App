//Variable
// let name ="Sayan";
// let age =24;
// var blood_group ="O+";
// var pincode=713151;
// const village="Mahesdanga";
// const mobile=8389910651;
// const weight=55.56;
// console.log("Name:",name,"Age:",age,"Blood Group:",blood_group);
// console.log("Weight:",weight,"Pincode:",pincode,"Village:",village,"Mobile:",mobile);

//Array
// let sports=["cricket","football","badminton","hockey","kabadi"];
// console.log("Total sports:",sports);
// console.log("2nd element",sports[1],"4th element:",sports[3]);
// console.log(sports[0],sports[1],sports[2],sports[3],sports[4],sports[5]);

//Object
// let data={
//     name: "Sid",
//     age: 22,
//     place: "Kolkata",
//     department: "CSE",
//     roll_no: 123
// };
// console.log(data);
// console.log("Name:",data.name,"Age",data.age,data.department,"Roll:",data.roll_no);

//Array Object
// let person=[{
//     p_name: "ABC", p_age: 24, p_place: "KOL"
// },{
//     p_name: "BCD", p_age: 29, p_place: "MUM"
// },{
//     p_name: "CDE", p_age: 22, p_place: "CHE"
// },{
//     p_name: "DEF", p_age: 44, p_place: "DEL"
// }];

// //for in

// for(let x in person)
// {
//     console.log("Index:",x,"Person Name:",person[x].p_name);
// }

//while
// let person=[{
//     p_name: "ABC", p_age: 24, p_place: "KOL"
// },{
//     p_name: "BCD", p_age: 29, p_place: "MUM"
// },{
//     p_name: "CDE", p_age: 22, p_place: "CHE"
// },{
//     p_name: "DEF", p_age: 44, p_place: "DEL"
// }];
// let i = 0;
// while(i<=person.length)
// {
//     console.log(person[1].p_name);
//     i++;
// }

// do while
// let person=[{
//     p_name: "ABC", p_age: 24, p_place: "KOL"
// },{
//     p_name: "BCD", p_age: 29, p_place: "MUM"
// },{
//     p_name: "CDE", p_age: 22, p_place: "CHE"
// },{
//     p_name: "DEF", p_age: 44, p_place: "DEL"
// }];
// let i = 1;
// do
// {
//     console.log(person[1].p_name);
//     i++;
// }while(i<=person.length)

// let i = 0;
// do{
//     if(i===5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }while(i<=10)

//for
// for(let x=0;x<=7;x++)
// {
//     console.log(person[1].p_name)
// }

//for of(takes the element)
// for(let element of person)
// {
//     console.log(element.p_place);
//     console.log(element);
// }

// push method
// Appends new elements to the end of an array, and returns the new length of the array.
// let str=["Ram","Faf","Lord","Jwala"];
// let count=str.push("Virat","Roni","Ravi");
// console.log(str,count);
// console.log(str);

//pop method
//Removes the last element from an array and returns it. If the array is empty,
// undefined is returned and the array is not modified.
// let str=["Ram","Faf","Lord","Jwala"];
// let s=str.pop();
// console.log(str,s);
// let t=str.pop();
// console.log(str,t);

//unshift method
//Inserts new elements at the start of an array, and returns the new length of the array.
// let str=["Ram","Faf","Lord","Jwala"];
// let a=str.unshift("Virat","Roni","Ravi");
// console.log(str,a);

//shift method
//Removes the first element from an array and returns it. If the array is empty,
// undefined is returned and the array is not modified.
// let str=["Ram","Faf","Lord","Jwala"];
// let b=str.shift();
// console.log(str,b);
// let c=str.shift();
// console.log(str,c);

// slice method(shallow copy)
// Returns a copy of a section of an array. For both start and end,
// a negative index can be used to indicate an offset from the end of the array
// let color=["Red","Green","Orange","Yellow","Blue","Black","White"];
// let slicedColor=color.slice(2);
// console.log(slicedColor,"\n",color);
// let a=color.slice(-5,-2);
// console.log(a);

//splice method(start index,delete element,add element)
//Removes elements from an array and, if necessary, 
//inserts new elements in their place, returning the deleted elements.
// let color=["Red","Green","Orange","Yellow","Blue","Black","White"];
//     color.splice(1,4,"Violet","Pink");
// console.log(color);
// color.splice(-3,1,"Pink");
// console.log(color);

//function -> 1.Named, 2.Annonymous, 3.Arrow

//Named
//Without return type, without parameter
// function display()
// {
//     console.log("Display this");
// }
// display();
// display();

// //Without return type, with parameter
// function show(sentence)
// {
//     console.log(sentence);
// }
// show("I am a boy.");
// show("My name is Sayan.")

// function sum(){
//     let a = 3;
//     let b = 5;
//     let add = a+b;
//     console.log(add);
// }

// sum();

// function sum(a,b){
//      let add = a+b;
//      console.log(add);
// } 

// sum(7,8);

//With  return type, with parameter
// function qube(num){
//     let result=num*num*num;
//     return result;
// }
// let qu=qube(5);
// console.log("Qube of 5",qu);
// console.log("Qube of 6",qube(6));

//Annonymous function

// let square=function(num){
//        let result=num*num;
//        return result;
// }

// console.log(square(3));

// let sum=function(x,y,z){
//     let total = (x*x*x)+(2*y)+z;
//     return total;
// }
// console.log(sum(-1,3,2));

//if-else statement
// let a=8;
// let b=9;
// if (a>b) {
//     console.log("a");
// } else {
//     console.log("b");
// }

// let time = 3;
// if(time<6){
//     console.log("good morning");
// }else if(time<10){
//     console.log("good night");
// }else{
//     console.log("good afternoon");
// }

// let condition=function(a,b){
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log(condition(4,5));

// Arrow function = higher order function => fat arrow
//without parameter without return type
// let sum=()=>{
//     let a = 6;
//     let b = 8;
//     let result = (a*b)
//     console.log(`sum of a and b is ${result}`);
// }
// sum();

//with parameter with return type
// let square=(c)=>{
//     let result = c*c;
//     return result;
// }
// console.log(square(9));

//with parameter without return type
// let qube=(num)=>{
//     let result = num*num*num;
//     console.log(result);
// }
// qube(5);

//spread operator(object margin)  ... Ellipsis
// let obj1={fName:"Sayan",lName:"Das",village:"Rasulpur"}
// let obj2={city:"Burdwan",pin:713151,po:"Rasulpur",fName:"Rohit"}
// let obj3={phone:123456,hobby:"learn new technology"}

// let person={...obj1,...obj2,...obj3};
// console.log(person);


//object destructuing(break the main object)
// let obj={fName:"Sayan",lName:"Das",village:"Rasulpur",city:"Burdwan",pin:713151,po:"Rasulpur"}
// let {fname,lName,village,city,pin,po}=obj;
// console.log(village,city,pin,po);

//array destructuing
// let years=[2014,2015,2016,2017,2018,2019,2020,2021,2022]
// let[y1,y2,y3,y4,y5,y6,y7,y8,y9]=years;
// console.log(y3,y7);

//find method
//Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// let students=[{
//     name:"Ravi",
//     class:12,
//     roll:23
// },{
//     name:"Raj",
//     class:10,
//     roll:28
// },{
//     name:"Rahul",
//     class:12,
//     roll:29
// }]
// let finded = students.find(value => value.class===12);
// console.log(finded);
//filter method
//Returns the elements of an array that meet the condition specified in a callback function.
// let filteredStd = students.filter(value => value.class===12);
// console.log(filteredStd);

//indexof
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// let arr=["red","green","blue","pink","green","yellow","green"];
// let a = arr.indexOf("green");
// console.log(`Index of green ${a}`);

// let b = arr.indexOf("green",2);
// console.log(`Index of green ${b}`);

// let c = arr.indexOf("green",5);
// console.log(`Index of green ${c}`);

// let d = arr.indexOf("green",7);
// console.log(`Index of green ${d}`);

//lastIndexof
//Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
// let arr1=["red","green","blue","pink","green"];
// let result1 = arr1.lastIndexOf("green");
// console.log(result1);

//Map method
//Calls a defined callback function on each element of an array, and returns an array that contains the results.
// let arr=[34,56,78,90,34,56,21,57,93];
// let mapped=arr.map(n=>n*3/2);
// console.log(mapped);

// let newMapped=mapped.map(m=>{
//     if(m%2===0){
//         return 'even';
//     }else{
//         return 'odd';
//     }
// })
// console.log(newMapped);

// let str=["Ram","Shyam","Rony","Raj"];
// let result=str.map(i=>{
//     if(str.length%2){
//         return 'even';
//     }else{
//         return 'odd';
//     }
// })
// console.log(result);

//function parameter -> 1.optional 2.default 3.rest

//optional(not getting the values of parameters as expected)
// function myFunc(a,b,c){
//     console.log(a+b+c);
// }
// myFunc("hello");
// myFunc("hello","world","sayan");
// myFunc(1);
// myFunc(1,2,3);

//default(default value at beginning, not arising optional error)
// function myFunc(a=6,b=7,c=9){
//     console.log(a+b+c);
// }
// myFunc(40);
// myFunc(undefined,60,80);

// function myFunc(a="hello",b="world",c="sayan"){
//     console.log(a+b+c);
// }
// myFunc("happy");
// myFunc(undefined,"happy",undefined);

//Rest(store values in x and make it an array)
// function restFunc(...x){
//     return x;
// }
// console.log(restFunc(12,34,56,78,90,45));
// console.log(restFunc(3,5,9));

// function restFunc(...x){
//     let result = 1;
//     for(let n of x){
//         result= result*n;
//     }
//     return result;
// }
// console.log(restFunc(3,5,9));

//Reduce Method
//Calls the specified callback function for all the elements in an array.
// The return value of the callback function is the accumulated result,
// and is provided as an argument in the next call to the callback function.
// function restFunc(...x){
//     // let reducer=(a,b)=>a*b;
//     return x.reduce((a,b)=>a*b);
// }
// console.log(restFunc(3,5,9));

// const array = [15, 16, 17, 18, 19];

// function reducer(previous, current) {
//   const returns = previous + current;
//   console.log(`previous: ${previous}, current: ${current}, returns: ${returns}`);
//   return returns;
// }

// array.reduce(reducer);

//fill method
//Changes all array elements from start to end index to a static value and returns the modified array
// let color=["red","green","blue","pink","yellow"];
// let filledColor=color.fill("orange");
// // let filledColor=color.fill("orange",2,5);
// console.log(filledColor);

//include method
//Determines whether an array includes a certain element, returning true or false as appropriate
// let includedColor=color.includes("orange");
// // let includedColor=color.includes("red");
// console.log(includedColor);

//find method
//Returns the value of the first element in the array where predicate is true, and undefined otherwise.
//findindex method
//Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// let num=[24,56,78,90,14,35];
// let findNum = num.find((n)=>n>50);
// console.log(findNum);
// let newNum=num.findIndex((n)=>n>50);
// console.log(newNum);

// let findCol=color.find((ele)=>ele.length>3);
// console.log(findCol);
// let newCol=color.findIndex((ele)=>ele.length>3);
// console.log(newCol);

// = vs == vs ===
//== ->compares the value and === ->compares the datatype also

// let a = 12;
// let b = "12";
// if(a==b){
//     console.log("true");
// }else{
//     console.log("false");
// }

// let a = 12;
// let b = "12";
// if(a===b){
//     console.log("true");
// }else{
//     console.log("false");
// }

//var vs let
//var -> function scope and let ->block scope
// function sum(){
//     var a = 5;
//     {
//         var b = 10;
//         console.log(a+b);
//     }
//     console.log(a-b);
// }
// sum();

// function sum(){
//     let a = 5;
//     {
//         let b = 10;
//         console.log(a+b);
//     }
//      console.log(a-b);
// }
// sum();

// function mul(){
//     var a = 2;
//     {
//         var b = 6
//         var result = a*b;
//     }
//     console.log(result);
// }
// mul();

// function mul(){
//     let a = 2;
//     {
//         let b = 6
//         let result = a*b;
//         // console.log(result);
//     }
//     console.log(result);
// }
// mul();

//var gives undefined value before initialization
// console.log(a);
// var a = 34;
// console.log(a);

//let and const gives error before initialization
// console.log(a);
// let a = 34;
// console.log(a);

// console.log(a);
// const a = 34;
// console.log(a);

//time gap between variable define and value initialize is called temporal dead zone. It only happens on let and const.

//Math method
// let number = 5.478;
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.trunc(number));
// console.log(Math.sign(number));

//class
//Classes are a template for creating objects. They encapsulate data with code to work on that data.
//Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
// class Employee{
//     e_id;
//     e_name;
//     e_address;
//     e_state;
//     constructor(id,name,address,state){
//         this.e_id=id;
//         this.e_name=name;
//         this.e_address=address;
//         this.e_state=state
//     }
// }
// let obj = new Employee(1,"Sayan","Kolkata","WB");
// let obj1 = new Employee(2,"Srijan"," Burdwan","WB");
// console.log(obj);
// console.log(obj1);

// let obj = {
//     fName:"Sayan",
//     lName:"Das",
//     address:"Kolkata"
// }
// function display(x,y){
//     return x+" "+this.fName+" "+this.lName+" "+y+" "+this.address;
// }

//Apply method
//Calls the function, substituting the specified object for the this value of the function, 
//and the specified array for the arguments of the function.
//It takes the arguments as an array format.
// let show1 = display.apply(obj,["I","from"]);
// console.log(show1);

//Call method
//Calls a method of an object, substituting another object for the current object.
//It takes the arguments as normal variable format.
// let show2 = display.call(obj,"I","from");
// console.log(show2);

//Bind method
//For a given function, creates a bound function that has the same body as the original function. 
//The this object of the bound function is associated with the specified object, and has the specified initial parameters.
//Bind returns function.
//It takes the arguments as normal variable format.
// let show3 = display.bind(obj,"I","from");
// console.log(show3());