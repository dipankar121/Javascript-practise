// 1.
// let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let obj2 = { b: 2, c: 3, e: 5, f: 7 };
// let res = {};
// for (key in obj1) {
//   if (obj1[key] === obj2[key]) {
//     res[key] = obj1[key];
//   }
// }
// console.log(res);

// 2.
const input = [1, 2, -2, 11, 7, 1, 11];
let arr = input.sort((a, b) => a - b);
console.log(arr);
let newArr = new Set(arr);
let finalArr = [...newArr];
console.log(finalArr[finalArr.length - 2]);
