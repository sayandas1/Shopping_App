//var: It supports functional scope. It mainly used for variable declearation. var gives the undefined value before initialization. 

function sum(){
        var a = 5;
        {
            var b = 10;
            console.log(a+b);
        }
        console.log(a-b);
    }
    sum();
    //returns output

//let: It supports block scope. It mainly used for variable decleration. let gives error before initialization.

function sum(){
        let a = 5;
        {
            let b = 10;
            console.log(a+b);
        }
        console.log(a-b);
    }
    sum();
    //returns error