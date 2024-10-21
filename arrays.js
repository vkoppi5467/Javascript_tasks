// const names = [];
// console.log(names);
// //Creating an Array and Initializing with Values
// const courses = ["HTML", "CSS", "Javascript", "React"];
// console.log(courses);
// //creating an array with empty value
// let name1 = new Array();
// console.log(name1);
// // Creating and Initializing an array with value
// let course1 = new Array("1","2", 1, 3);
// console.log(course1);
// //Initializing Array while declaring
// let name2 = new Array(1);
// name2[0] = 20;
// console.log(name2)
input = "1,2,3,4,5";
array= input.split(",");
numArray = array.map(Number);
console.log(numArray);