// Creating a new Promise and storing it in promiseOne
const promiseOne = new Promise(function (resolve, reject) {

  // Simulating an asynchronous task (like DB call, API call, etc.)
  setTimeout(() => {
    console.log("async task 1");

    // resolve() tells that the async task is completed successfully
    // This triggers the .then() attached to this promise
    resolve();
  }, 1000);
});

// .then() runs when promiseOne is resolved
promiseOne.then(() => {
  console.log("async 1 is resolved");
});


// Creating and consuming promise directly without storing in variable
new Promise(function (resolve, reject) {

  // Another async operation
  setTimeout(() => {
    console.log("async task 2");

    // Resolving the promise
    resolve();
  }, 1000);

}).then(() => {
  // This executes after resolve() is called above
  console.log("async 2 is resolved");
});



// ------------------- Promise 3 ---------------------

// Creating a promise that resolves with some data (object)
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {

    // Passing data inside resolve()
    // This data will be received in .then()
    resolve({ username: "lavish", email: "lavish@gmail.com" });

  }, 1000);
});

// 'user' receives the resolved data
promiseThree.then((user) => {
  console.log(user);
});



// ------------------- Promise 4 ---------------------

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {

    // Simulating error condition
    let error = true; // change to false to see resolve flow

    if (!error) {
      // If no error → resolve with data
      resolve({ username: "lavish", email: "lavish@gmail.com" });
    } else {
      // If error → reject with message
      reject("ERROR: Somethinng went wrong!!");
    }

  }, 1000);
});

// Chaining multiple .then()
promiseFour
  .then((user) => {
    // Runs if promise is resolved
    console.log(user);

    // returning value to next .then()
    return user.username;
  })
  .then((username) => {
    // Receives returned value from previous .then()
    console.log(username);
  })
  .catch((error) => {
    // Runs if promise is rejected
    console.log(error);
  })
  .finally(() => 
    // finally runs always (resolve or reject)
    console.log("the promise is finally resolved or rejected!!")
  );




// ------------------- Promise 5 with async/await ---------------------

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {

    let error = true; // change to false to test resolve

    if (!error) {
      resolve({ username: "javascript", email: "javascript@gmail.com" });
    } else {
      reject("ERROR:-> javascript Somethinng went wrong!!");
    }

  }, 1000);
});


// async function allows use of await
async function consumePromiseFive() {

  try {
    // await pauses execution until promise resolves/rejects
    const response = await promiseFive;

    // runs if resolved
    console.log(response);

  } catch (error) {
    // runs if rejected
    console.log(error);
  }
}

// calling async function
consumePromiseFive();




// ------------------- Fetch using async/await ---------------------

// async function getAllUsers() {
//   try {
//     // fetch returns a promise
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     // response.json() also returns a promise
//     const data = await response.json();

//     // final data
//     console.log(data);

//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();




// ------------------- Fetch using .then() ---------------------

// fetch makes HTTP request and returns a promise
fetch("https://jsonplaceholder.typicode.com/users")

  .then((response) => {
    // converting response to JSON (also returns promise)
    return response.json();
  })

  .then((data) => {
    // final resolved JSON data
    console.log(data);
  })

  .catch((error) => 
    // runs if fetch fails
    console.log(error)
  );