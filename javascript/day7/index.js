// oject is a collection of key-value pairs

// let students = {
//     name:"john",
//     age: 20,
//     isactivate: function(){
//         return 2025 - this.age;
//     }
// }

// console.log(students.isactivate());

// // object destructing
// let {age, isactivate} = students;

// console.log(age);


// an array index starts with zero

// let student = ["john", 20, true, yo = function yo(){console.log("yo")}, {name: "john"}, [1,2,3]]

// console.log(typeof(student.yo));;
// student.push("new students");
// student.pop();
// student.shift();
// student.unshift("new new student");

// console.log(student);

let numbers = [1,2,3,4,5,6]

numbers = numbers.map(num => num * 2);

console.log(numbers);

numbers = numbers.filter(num => num/2 === 0);

console.log(numbers);