// // type 1 declared functions
// function hello (firstname, lastname){
//     name = firstname + " " + lastname;
//     console.log(`hello, ${name}!`);
//     return name;
// }
// lastname = "wardo";
// firstname = "za"
// // type 2 assignment of function to a variabel
// let result = hello(firstname, lastname);

// console.log(result);
// // type 3 arrow function
// const addition = (a , b) => a + b;

// console.log(addition(5,10));

// // type 4 default parameters
// function greetuser (name = "guest"){
//     console.log(`hello, ${name}!`);
// } 
// greetuser("za wardo");

// // type 5 hiher order funcition
// no_of_times = 3;
// function higher(func, no_of_times = 5){
//     console.log(`${func(6, 5)}  number of furits: ${no_of_times}`)
// }

// higher(addition, no_of_times);

// // type 6 anomous function
// setTimeout(function() {
//     console.log("hello, world"+" "+ "!");
// }, 1000);

// (function(){
//     console.log("this is IIFE");
// })()

const greet = function(name, age){
    console.log("ola");
}
const obj = {
    name: "za wardo:",
    age: 25,
    greet: "ola"
}

console.log(obj.greet);