//1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let res = new Date();
// let day = res.getDay();
// let time = res.toLocaleTimeString();
// console.log(days[day], time);

//2. Write a JavaScript program to print the contents of the current window.

// Write a JavaScript program to get the current date
// let date = new Date();
// console.log(date.toLocaleDateString());

//3. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
// let str = "Dipankar";
// let interval = setInterval(() => {
//   console.log(str);
//   str = str[str.length - 1] + str.substring(0, str.length - 1);
// }, 1000);
// setTimeout(() => {
//   clearInterval(interval);
// }, (str.length + 1) * 1000);

//4. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// let year = 2012;
// if (year % 4 == 0) {
//   if (year % 400 == 0 || year % 100 != 0) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// } else {
//   console.log("no");
// }

//5.  Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
// for (var year = 2014; year <= 2050; year++) {
//   let d = new Date(year, 0, 1);
//   if (d.getDay() === 0) {
//     console.log("Sunday", year);
//   }
// }

//6. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
// let num = Math.ceil(Math.random() * 10);
// let guess = 7;
// if (num === guess) {
//   console.log("Correct", 7);
// } else {
//   console.log("Not Correct", "Correct is:", num);
// }

//7. Write a JavaScript program to calculate days left until next Christmas.
// let today = new Date();
// let cday = new Date(today.getFullYear(), 11, 25);
// if (today.getMonth() == 11 && today.getDate() > 25) {
//   cday.setFullYear(cday.getFullYear() + 1);
// }
// let oneday = 24 * 60 * 60 * 1000;
// console.log(
//   Math.ceil((cday.getTime() - today.getTime()) / oneday) + " days left"
// );
// console.log(cday);
// console.log(cday.getTime());

//8.  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// let far = 140;
// let cel = ((far - 32) / 9) * 5;
// console.log(cel);

//9. Write a JavaScript program to get the website URL (loading page)
// console.log(document.URL);

// 10. Write a JavaScript exercise to create a variable using a user-defined name.
// var user_name = "abcd";
// var n = 120;
// this[user_name] = n;
// console.log(user_name);

// 11. Write a JavaScript exercise to get the extension of a filename.
// let filename = "image.jpg";
// let ans = filename.split(".");
// console.log(ans[ans.length - 1]);
// OR
// let filename = "system.php";
// console.log(filename.split(".").pop());

// 12. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
// let num = 67;
// if (num <= 13) {
//   console.log(num - 13);
// } else {
//   console.log((num - 13) * 2);
// }

// 13. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// let a = 5;
// let b = 5;
// if (a === b) {
//   console.log((a + b) * 3);
// } else {
//   console.log(a + b);
// }

// 14. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
// let n = 40;
// if (n <= 19) {
//   console.log(19 - n);
// } else {
//   console.log((n - 19) * 3);
// }

// 15. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50
// let a = 5;
// let b = 8;
// if (a === 50 || b === 50) {
//   console.log("true");
// } else if (a + b === 50) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 16. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

// 17. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
// let a = 9;
// let b = -3;
// if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 18. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
// let str1 = "pydipankar";
// if (str1[0] == "p" && str1[1] == "y") {
//   console.log(str1);
// } else {
//   console.log("Py" + str1);
// }
// OR
// let str1 = "Hello";
// if (str1.startsWith("Py")) {
//   console.log(str1);
// } else {
//   console.log("Py" + str1);
// }
// OR
// let str1 = "hello";
// if (str1.substring(0, 2) === "py") {
//   console.log(str1);
// } else {
//   console.log("Py" + str1);
// }
// Using REGEX

// 19. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
// let str = "dipankar";
// let res = str.slice(0, 2) + str.slice(3);
// console.log(res);

// 20. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1
// let str = "hello";
// let res =
//   str.slice(str.length - 1) + str.slice(1, str.length - 1) + str.slice(0, 1);
// console.log(res);

// 21. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
// let str = "fhhf";
// let res = str.slice(0, 1) + str + str.slice(0, 1);
// console.log(res);

// 22.  Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
// let n = 17;
// if (n % 3 == 0 || n % 7 == 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 23. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
// let str = "dipankar";
// let res = str.slice(-3) + str + str.slice(-3);
// console.log(res);

// 24. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise
// let str = "Javascript";
// if (str.startsWith("Java")) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 25. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
// let a = 26;
// let b = 37;
// if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 26. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
// let str = "iiiiScript";
// let index = str.indexOf("Script");
// if (index === 4) {
//   //   console.log(str.slice(0, index));
//   // OR
//   console.log(str.replace("Script", ""));
// } else {
//   console.log(str);
// }

// 27.  Write a JavaScript program to find the largest of three given integers.
// let a = 30;
// let b = 9;
// let c = 10;
// if (a > b && a > c) {
//   console.log("a");
// } else if (b > a && b > c) {
//   console.log("b");
// } else {
//   console.log("c");
// }

// 28. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
// let a = 89;
// let b = 89;
// let ans1 = Math.abs(100 - a);
// let ans2 = Math.abs(100 - b);
// if (ans1 > ans2) {
//   console.log("b");
// } else if (ans2 > ans1) {
//   console.log("a");
// } else {
//   console.log("equal");
// }

// 29. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
// let str = "dipankar";
// let a = "z";
// let ans = str.indexOf(a);
// if (ans == 1 || ans == 2 || ans == 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// 30. Write a JavaScript program to check whether the last digit of the three given positive integers is same.
// let str1 = "hello";
// let str2 = "brun";
// let str3 = "judo";
// let c1 = str1.charAt(str1.length - 1);
// let c2 = str2.charAt(str2.length - 1);
// let c3 = str3.charAt(str3.length - 1);
// if (c1 === c2 && c2 === c3) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 31. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
// let str = "DIPANKAR";
// if (str.length < 3) {
//   console.log(str.toUpperCase());
// } else {
//   console.log(str.slice(0, 3).toLowerCase());
// }

// 32.  Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise
// let tlMrks = 80;
// if (tlMrks >= 90 && tlMrks <= 100) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 33. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
// let a = 9;
// let b = 5;
// let sum = a + b;
// if (sum >= 50 && sum <= 80) {
//   console.log(65);
// } else {
//   console.log(80);
// }

// 34. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
// let a = 9;
// let b = 8;
// if (a == 8 || b == 8 || a + b == 8 || Math.abs(a - b) == 8) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// 35. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
// let a = 9;
// let b = 9;
// let c = 9;
// if (a === b && b === c) {
//   console.log(30);
// } else if (a === b || b === c || a === c) {
//   console.log(40);
// } else {
//   console.log(20);
// }

// 36. Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.

// 37.  Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit
// let a = 34;
// let b = 65;
// let c = 74;
// let a1 = a.toString();
// let a2 = a1.split("");
// let a3 = a2[a2.length - 1];
// let b1 = b.toString();
// let b2 = b1.split("");
// let b3 = b2[b2.length - 1];
// let c1 = c.toString();
// let c2 = c1.split("");
// let c3 = c2[a2.length - 1];
// if (a3 === b3 && b3 === c3) {
//   console.log("true");
// } else {
//   console.log("no");
// }

// 38. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

// 39. Write a JavaScript program to check whether a given number is presents in the range 40..10000.
// let n = 67;
// if (n >= 40 && n <= 10000) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 40. Write a JavaScript program to reverse a given string.
// let str = "dipankar";
// let str1 = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   str1 = str1 + str[i];
// }
// console.log(str1);

// 41. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
// let str = "dipankar";
// let newStr = "";
// for (let i = 0; i <= str.length - 1; i++) {
//   if (str[i] == "z") {
//     newStr = newStr + "a";
//     return;
//   } else if (str[i] == "Z") {
//     newStr = newStr + "A";
//     return;
//   } else {
//     let x = str.charCodeAt(i);
//     let y = String.fromCharCode(x + 1);
//     newStr = newStr + y;
//   }
// }
// console.log(newStr);

// 42.Write a JavaScript program to capitalize the first letter of each word of a given string.
// let str = "hello, my name is Khan. And I am not a Terrorist.";
// let strArr = str.split(" ");
// let newStr = "";
// for (let i = 0; i <= strArr.length - 1; i++) {
//   newStr = newStr + strArr[i][0].toUpperCase() + strArr[i].slice(1) + " ";
// }
// console.log(newStr);

// 43. Write a JavaScript program to convert a given number to hours and minutes.
// let num = 560;
// let hr = Math.floor(num / 60);
// let min = num % 60;
// console.log(hr, ":", min);

// 44. Write a JavaScript program to convert the letters of a given string in alphabetical order.
// let str = "dipankar";
// console.log(str.split("").sort().join(""));

// 45. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
// let str = "chainsbreak";
// if (/a...b/.test(str) || /b...a/.test(str)) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// 46. Write a JavaScript program to count the number of vowels in a given string.
// let str = "dipankar";
// let count = 0;
// for (let i = 0; i <= str.length - 1; i++) {
//   if (
//     str[i] == "a" ||
//     str[i] == "e" ||
//     str[i] == "i" ||
//     str[i] == "o" ||
//     str[i] == "u" ||
//     str[i] == "A" ||
//     str[i] == "E" ||
//     str[i] == "I" ||
//     str[i] == "O" ||
//     str[i] == "U"
//   ) {
//     count = count + 1;
//   }
// }
// console.log(count);
// OR
// let str = "dipankar";
// console.log(str.replace(/[^aeiou]/g, "").length);

// 47. Write a JavaScript program to check whether a given string contains equal number of p's and t's.
// let str = "tttppp";
// let countP = 0;
// let countT = 0;
// for (let i = 0; i <= str.length - 1; i++) {
//   if (str[i] == "p" || str[i] == "P") {
//     countP = countP + 1;
//   }
//   if (str[i] == "t" || str[i] == "T") {
//     countT = countT + 1;
//   }
// }
// if (countP == countT) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// OR
// let str = "tttppppp";
// let x = str.replace(/[^p]/g, "").length;
// let y = str.replace(/[^t]/g, "").length;
// console.log(x === y);
