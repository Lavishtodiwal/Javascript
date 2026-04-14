function multipy(num) {
  return num * num;
}

multipy.power = 2;

console.log(multipy(5));
console.log(multipy.power);
console.log(multipy.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(this.score);
};

const chai = new createUser("chai", 10);
const tea =createUser("tea", 250);

chai.printMe()