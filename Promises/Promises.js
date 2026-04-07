const promiseOne = new Promise(function (resolve, reject) {
  //do an async tasks //like db calls, network call

  setTimeout(() => {
    console.log("async task 1");
    resolve(); // this will inform to .then that the task is done
  }, 1000);
});

promiseOne.then(() => {
  console.log("async 1 is resolved");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve(); // this will inform to .then that the task is done
  }, 1000);
}).then(() => {
  console.log("async 2 is resolved");
});

//  3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("async task 1");
    resolve({ username: "lavish", email: "lavish@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

//  4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("async task 1");
    resolve({ username: "lavish", email: "lavish@gmail.com" });
  }, 1000);
});

promiseFour.then((user) => {
  console.log(user);
});