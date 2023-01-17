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
