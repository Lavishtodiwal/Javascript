//singleton -> only one object can be create

//object literals ->

const user = {}; //objects
const user1 = new Object(); //this is uding contructer

const smbl = Symbol("key1");
const jsUser = {
  name: "Lavish",
  age: 21,
  [smbl]: "mykey1",
  Location: "Noida",
  email: "lavish@google.com",
  course: "BCA", //then here we need to use 2nd log method to print the value
};

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser[smbl]);

Object.freeze(jsUser);
jsUser.age = 22;
// console.log(jsUser);
