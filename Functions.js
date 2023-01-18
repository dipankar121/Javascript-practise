// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
// let x = 32243;
// let y = x.toString();
// console.log(parseInt(y.split("").reverse().join("")));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// let x = "dipankar";
// let y = x.split("").reverse().join("");
// if (x === y) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
// let x = "dog";
// let y = [];
// for (let i = 0; i <= x.length - 1; i++) {
//   y.push(x[i]);
//   let temp = x[i];
//   for (let j = i + 1; j <= x.length - 1; j++) {
//     temp = temp + x[j];
//     y.push(temp);
//   }
//   temp = "";
// }
// console.log(y);

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// let x = "dipankar";
// console.log(x.split("").sort().join(""));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// let x = "the quick brown fox";
// let y = x.split(" ");
// console.log(y);
// let newstr = "";
// for (let i = 0; i <= y.length - 1; i++) {
//   newstr = newstr + y[i][0].toUpperCase() + y[i].slice(1) + " ";
// }
// console.log(newstr);

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// let x = "Web Development Tutorial";
// let y = x.split(" ");
// let longest = y[0];
// let longLength = y[0].length;
// for (let i = 1; i <= y.length - 1; i++) {
//   if (y[i].length > longLength) {
//     longest = y[i];
//     longLength = y[i].length;
//   }
// }
// console.log(longest);

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// let x = "The quick brown fox";
// let vowel = "aeiouAEIOU";
// let count = 0;
// for (let i = 0; i <= x.length - 1; i++) {
//   if (vowel.indexOf(x[i]) !== -1) {
//     count = count + 1;
//   }
// }
// console.log(count);

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// let x = 23;
// let count = 0;
// for (let i = 2; i <= x; i++) {
//   if (x % i === 0) {
//     count = count + 1;
//   }
// }
// if (count === 1) {
//   console.log("prime");
// } else {
//   console.log("not prime");
// }

// 9. Write a JavaScript function which accepts an argument and returns the type.
// let x = 9;
// console.log(typeof x);

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// let n = 3;
// let arr = "";
// for (let i = 0; i <= n - 1; i++) {
//   for (let j = 0; j <= n - 1; j++) {
//     if (i === j) {
//       arr = arr + 1 + " ";
//     } else {
//       arr = arr + 0 + " ";
//     }
//   }
//   arr = arr + "\n";
// }
// console.log(arr);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// let x = [1, 2, 3, 4, 5];
// let y = x.sort();
// console.log(y[1], y[y.length - 2]);

// 12. Write a JavaScript function which says whether a number is perfect.

// 13. Write a JavaScript function to compute the factors of a positive integer
// let x = 50;
// let factors = "";
// for (let i = 0; i <= x; i++) {
//   if (x % i === 0) {
//     factors = factors + i + " ";
//   }
// }
// console.log("factors:", factors);

// 14. Write a JavaScript function to convert an amount to coins. Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
function coins(x) {
  let ten = parseInt(x / 10);
  let five = parseInt(ten / 5);
  let two = parseInt(five / 2);
  let one = two;
  console.log(
    "10: ",
    ten,
    "\n",
    "5 :",
    five,
    "\n",
    "2: ",
    two,
    "\n",
    "1: ",
    one
  );
}
coins(41);
