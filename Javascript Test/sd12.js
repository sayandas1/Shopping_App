//Splice method: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let color=["Red","Green","Orange","Yellow","Blue","Black","White"];
    color.splice(1,4,"Violet","Pink");
console.log(color);
color.splice(-3,1,"Pink");
console.log(color);

//Slice method: Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. It also named as Shallow Copy.
// let color=["Red","Green","Orange","Yellow","Blue","Black","White"];
// let slicedColor=color.slice(2);
// console.log(slicedColor,"\n",color);
// let a=color.slice(-5,-2);
// console.log(a);