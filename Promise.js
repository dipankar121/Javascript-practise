// 1.
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// console.log("end");
// Promises are indeed asynchronous, which means that they are designed to execute their logic in the background, separate from the main execution thread.

// However, in this specific code snippet, the promise is created but not settled, so the executor function passed to the promise constructor is executed immediately, synchronously along with the rest of the code. The promise is created, but it does not have any logic that tells it to resolve or reject, and it does not have any event listeners attached to it, so it doesn't do anything that would cause it to run asynchronously.

// It's important to note that creating a promise does not mean that it will be resolved or rejected, it's only a way to handle the outcome of some asynchronous code, like network requests, timers, or other asynchronous operations.

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 2.
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");
// This code creates a new promise object named promise1 using the Promise constructor. The constructor is passed a function with two parameters, resolve and reject, which are used to determine the outcome of the promise. The function passed to the constructor is called the executor.

// The code then logs the number "1" to the console, and then calls the resolve(2) function, which will settle the promise with the value of 2.

// The promise1.then((res) => {console.log(res);}); is a handler that will be called when the promise is settled and it's passed the resolved value as an argument, which in this case is 2. The then function logs the resolved value to the console.

// Then the code logs the string "end" to the console.

// It's important to note that the then function is called after the "end" log and not before, this is because the promise is settled synchronously and the then function is called asynchronously after the promise was settled.

// The console.log('start') and console.log('end') are used to indicate the start and end of the code block.

// The output of this code will be:
// start
// 1
// end
// 2

// The order of the output is "start", "1", "end" and "2" is because the first two logs are synchronous and the last log is asynchronous.

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 3.
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");
// This code creates a new promise object named promise1 using the Promise constructor. The constructor is passed a function with two parameters, resolve and reject, which are used to determine the outcome of the promise. The function passed to the constructor is called the executor.

// The code then logs the number "1" to the console, and then calls the resolve(2) function, which will settle the promise with the value of 2.

// After the call to resolve(2), the code logs the number "3" to the console.

// The promise1.then((res) => {console.log(res);}); is a handler that will be called when the promise is settled and it's passed the resolved value as an argument, which in this case is 2. The then function logs the resolved value to the console.

// Then the code logs the string "end" to the console.

// It's important to note that the then function is called after the "end" log and not before, this is because the promise is settled synchronously and the then function is called asynchronously after the promise was settled.

// The console.log('start') and console.log('end') are used to indicate the start and end of the code block.

// The output of this code will be:
// start
// 1
// 3
// end
// 2

// The order of the output is "start", "1", "3", "end" and "2" is because the first four logs are synchronous and the last log is asynchronous.

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 4.
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// promise1.then((res) => {
//   console.log(2);
// });

// console.log("end");

// This code creates a new promise object named promise1 using the Promise constructor. The constructor is passed a function with two parameters, resolve and reject, which are used to determine the outcome of the promise. The function passed to the constructor is called the executor.

// The code then logs the number "1" to the console.

// The promise1.then((res) => {console.log(2);}); is a handler that will be called when the promise is settled and it's passed the resolved value as an argument. However, the promise is not settled, so the then function is not called.

// Then the code logs the string "end" to the console.

// It's important to note that the then function is never called because the promise is not settled, so there's no resolved value to pass to it.

// The console.log('start') and console.log('end') are used to indicate the start and end of the code block.

// The output of this code will be:
// start
// 1
// end

// The order of the output is "start", "1" and "end", because the logs are synchronous and nothing else is happening.

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 5.
// console.log("start");

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("end");

// This code creates a function named fn that returns a new promise object using the Promise constructor. The constructor is passed a function with two parameters, resolve and reject, which are used to determine the outcome of the promise. The function passed to the constructor is called the executor.

// The code then logs the string "start" to the console.

// Then code logs the string "middle" to the console.

// The fn() function is invoked and it returns the promise object, the returned promise has a then method attached to it, the then function is a handler that will be called when the promise is settled and it's passed the resolved value as an argument, which in this case is "success". The then function logs the resolved value to the console.

// Then the code logs the string "end" to the console.

// It's important to note that the then function is called after the "end" log and not before, this is because the promise is settled synchronously and the then function is called asynchronously after the promise was settled.

// The console.log('start'), console.log('middle') and console.log('end') are used to indicate the start, middle, and end of the code block.

// The output of this code will be:
// start
// middle
// end
// success

// The order of the output is "start", "middle", "end" and "success" is because the first three logs are synchronous and the last log is asynchronous.

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 6.
// console.log("start");

// Promise.resolve(1).then((res) => {
//   console.log(res);
// });

// Promise.resolve(2).then((res) => {
//   console.log(res);
// });

// console.log("end");

// This code creates two promise objects using the Promise.resolve() method, which creates a promise that is already settled with a resolved value. The first promise is resolved with the value of 1 and the second promise is resolved with the value of 2.

// The code then logs the string "start" to the console.

// Both promise objects have a then method attached to them, the then function is a handler that will be called when the promise is settled and it's passed the resolved value as an argument. The then function logs the resolved value to the console.

// Then the code logs the string "end" to the console.

// It's important to note that the then function is called after the "end" log and not before, this is because the promises are settled synchronously and the then function is called asynchronously after the promise was settled.

// The console.log('start') and console.log('end') are used to indicate the start and end of the code block.

// The output of this code will be:
// start
// end
// 1
// 2

// The order of the output is "start", "end", "1" and "2" is because the first two logs are synchronous and the last two logs are asynchronous.

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 7.
// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//   console.log("resolve");
// });

// console.log("end");

// This code creates a timeout using setTimeout, which is a function that runs a callback after a specified delay.

// Then, it creates a promise using Promise.resolve(), which creates a promise that is already settled with a resolved value.

// The code then logs the string "start" to the console.

// The setTimeout function has a callback that logs "setTimeout" to the console, this callback is scheduled to run after the specified delay which is 0ms by default.

// The promise object has a then method attached to it, the then function is a callback that is called when the promise is settled. This callback logs "resolve" to the console.

// Then the code logs the string "end" to the console.

// It's important to note that the setTimeout callback and the then function are called after the "end" log and not before, this is because the setTimeout callback and the then function are scheduled to run asynchronously after the promise was settled.

// The console.log('start') and console.log('end') are used to indicate the start and end of the code block.

// The output of this code will be:
// start
// end
// resolve
// setTimeout

// The order of the output is "start", "end", "resolve" and "setTimeout" is because the first two logs are synchronous and the last two logs are asynchronous.

// Keep in mind that the order of the last two logs may vary depending on the performance of the JavaScript engine.

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 8.

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 1000);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

// This code creates a new promise object named promise using the Promise constructor. The constructor is passed a function with two parameters, resolve and reject, which are used to determine the outcome of the promise. The function passed to the constructor is called the executor.

// The code then logs the number "1" to the console and then creates a timeout using setTimeout function. The timeout function logs "timerStart" to the console, calls the resolve function with the value of "success" and logs "timerEnd" to the console. The timeout is set to 1000 milliseconds, which means that it's scheduled to run after a delay of 1000ms (1s).

// After that, the code logs the number "2" to the console.

// The promise object has a then method attached to it, the then function is a callback that is called when the promise is settled. This callback logs the resolved value passed to it which is "success" to the console.

// Finally, the code logs the number "4" to the console.

// It's important to note that the setTimeout callback and the then function are called after the "4" log and not before, this is because the setTimeout callback and the then function are scheduled to run asynchronously after the promise was settled.

// The output of this code will be:
// 1
// 2
// 4
// timerStart
// timerEnd
// success

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 9.

// const timer1 = setTimeout(() => {
//   console.log("timer1");

//   const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//   });
// }, 0);

// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 10.

// console.log("start");

// const promise1 = Promise.resolve().then(() => {
//   console.log("promise1");
//   const timer2 = setTimeout(() => {
//     console.log("timer2");
//   }, 0);
// });

// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   const promise2 = Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }, 0);

// console.log("end");

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// 11.
// const promise = new Promise((resolve, reject) => {
//   reject(Error("Some Error Occurred"));
// })
//   .then((error) => console.log(error))
//   .catch((error) => console.log(error));

// 12.
let task = new Promise((resolve, reject) => {
  console.log("start");
  setTimeout(() => {
    //   Either resolve or reject. Both cannot occur together
    // resolve("resolved");
    reject("rejected");
  }, 1000);
  console.log("end");
});

task
  // When resolved
  .then((msg) => {
    console.log(msg);
  })
  // When rejected
  .catch((msg) => {
    console.log(msg);
  })
  // Whatever happens the code should run
  .finally(() => {
    console.log("finally");
  });
