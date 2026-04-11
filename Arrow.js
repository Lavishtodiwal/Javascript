const user = {
  username: "lavish",
  mobile: 909090,
  welcomeMsg: function () {
    console.log(`${this.username}, welcome to the website!`);
    console.log(This);
  },
};

// user.welcomeMsg();
user.username = "vira";
// user.welcomeMsg();

// console.log(This);
//**************************************************** */
// function chai() {
//   let username = "kotti";
//   console.log(this);
//   console.log(this.username); //this will not work in the function only in the object..
// }

// chai();

const chai = () => {
  let username = "lokkey";
  console.log(this.username);
};
chai();
--------------------Arrow functions------------------------------

const addTwo = (num1, num2) => {
  console.log(num1 + num2);
};

addTwo(10,20)

const addTwo = (num1, num2) => console.log(num1 + num2);
const addTwo1 = (num1, num2) => num1 + num2; //also work as a return statement
const addTwo2 = (num1, num2) => ({ username: "hitesh" });

addTwo(10, 20);
console.log(addTwo1(10, 20));
console.log(addTwo2(10, 20));
