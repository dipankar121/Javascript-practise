// 1. How to define a class withy properties and methods?
// class Car {
//   constructor(model, name) {
//     (this.model = model), (this.name = name);
//   }

//   start() {
//     console.log(`${this.name} Started`);
//   }

//   end() {
//     console.log(`${this.name} Stopped`);
//   }
// }

// bmw = new Car(620, "sports_edition");
// bmw.start();

// 2. how to implement class inheritance?
// class ElectricCar extends Car {
//   start() {
//     super.start();
//   }
//   end() {
//     super.end();
//   }

//   speed() {
//     console.log("Very Fast");
//   }
// }

// let evcar = new ElectricCar("Tesla", "a320");
// evcar.start();
// evcar.end();
// evcar.speed();

// ************************************************************
// ************************************************************
// 3. How to find duplicate element and remove in an given array?
// let arr = [4, 8, 2, 4, 7, 4, 0, 4, 5, 4, 8, 1, 0];
// let x = arr.filter((item, index) => arr.indexOf(item) !== index);
// let y = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(x, y);

// ************************************************************
// ************************************************************
// 4. How to find the count of duplicates in an array?
// let arr = [4, 8, 2, 4, 7, 4, 0, 4, 5, 4, 8, 1, 0];

// 5. How to check if a given number is an integer?
// let num = 6.8;
// console.log(!isNaN(num));

// 6. Object.freeze() vs const
// => You cannot assign a new value to a const variable
// => It makes an object immutable. We cannot cahnge its propeties

// 7. How to sort a number array?
// let x = [7, 0, 34, 54, 63, 8, 49, 12, 3];
// console.log(x.sort((a, b) => a - b));

// 8. How to sort an array of string?
// let str = ["ab", "cd", "ar", "ju", "lu"];
// console.log(str.sort());
// console.log(str.reverse());

// 9. How to find unique values in an array?
// let arr = [4, 8, 2, 4, 7, 4, 0, 4, 5, 4, 8, 1, 0];
// console.log(arr.filter((item, index) => arr.indexOf(item) === index));

// 10. How to find unique values from a sorted array?
// let arr = ["ab", "ab", "ab", "ar", "ar", "ar", "cd", "ju", "lu"];
// let unique = [arr[0]];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] !== arr[i - 1]) {
//     unique.push(arr[i]);
//   }
// }
// console.log(unique);

// 11. How to find maximum value in a numbered array?
// let arr = [4, 8, 2, 4, 7, 4, 0, 4, 5, 4, 8, 1, 0];
// let x = arr.sort((a, b) => a - b);
// console.log(x[x.length - 1]);

// 12. What is spread operator?
// => It is used to expand an array or object

// 13. How can you create an object?
// var obj = {
//   id: "1",
//   roolNo: 1,
//   education: [
//     {
//       school: "SSBA",
//       marks: 85.5,
//     },
//     {
//       college: "Darrang",
//       marks: 85.5,
//     },
//   ],
// };

// 14. What is this operator?
// => The "this" operator refers to the object it refers to.
// => In a method, "this" refers to the owner object
// => In a function, "this" refers to the global object
