//default behavior is prototypal behaivor

// let myName = "hitesh    ";

// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ["krishna", "shiv", "hanumaan"];

let heroPower = {
  // object
  shiv: "dyaalu",
  krishna: "Great Warrior",
  getShiv: function () {
    console.log(`shiv is :-> ${this.shiv}`);
  },
};

heroPower.getShiv();

Object.prototype.lavish = function () {
  // papa ko power dedi and ye sab me add h o jayega
  console.log("lavish is here....");
};
heroPower.lavish();
myHeros.lavish();

Array.prototype.sayLavish = function () {
  // papa ko power dedi and ye sab me add h o jayega
  console.log("lavish is here from the array....");
};
heroPower.sayLavish();
myHeros.sayLavish();
