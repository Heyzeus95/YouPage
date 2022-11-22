// //example 1
// function greetname(name) {
//     console.log("hey you there! STOP!")
// }
// greetname("jesus");

// //example 2
// const a = 100;
// const b = 5;
// function addTwoNumbers(a,b) {
//     const sum = a + b;
//     console.log(`The sum of' ${a} + ${b} = ${sum}`);
// }
// addTwoNumbers(100, 5);
// addTwoNumbers(10,2);

// //example 3
// let greet =() => {
//     console.log("jesus");
//     console.log("27");
// }
// greet(); // print jesus age

// //example 3
// let myName = "jesus";
// let age = 27;

// let logAgeAndName = () => {
//     console.log(`My name is ${myName} and I am ${age}`);
//     };
//     logAgeAndName(); // print jesus age

// //example 4
// const baseValue = prompt('5');
// const heightValue = prompt('10');
// const area = (base * height)/2;
// console.log(area);

// //example 5
//   var kilometers = 25;
//   var miles = kilometers * 1.62137119;
//   console.log(miles);

// //example 6
// // program to convert celsius to fahrenheit
// // ask the celsius value to the user
// const celsius = prompt("fahrenheit = (20 * 1.8) + 32: ");
// // calculate fahrenheit
// const fahrenheit = (celsius * 1.8) + 32
// //display the result
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

// const impressions = [
//     {
//         title: "dev",
//         comment: "you rock",
//         accountIsActive: true,
//     },
//     ["loveable", "friendly"],
// ];


// let hobbies = ["eat", "sleep"];
// hobbies.push("exercise");
// console.log(hobbies);

// let colors = ["red", "green"];
// colors[3] ="yellow";
// console.log(colors, "colors");

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// const arr = [5, -5, -3, -5, -7, -8, 1, 9];
// const sumPositives = (arr = []) => {
//    const isPositive = num => typeof num === 'number' && num > 0;
//    const res = arr.reduce((acc, val) => {
//       if(isPositive(val)){
//          acc += val;
//       };
//       return acc;
//    }, 0);
//    return res;
// };
// console.log(sumPositives(arr));



//below is randomizing a number
var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)
var five = 5
// console.log(typeof randomNumber)
// console.log(typeof five )
console.log(randomNumber + five)








