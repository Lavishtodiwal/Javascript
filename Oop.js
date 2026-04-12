const user = {
  username: "hitesh",
  loginCount: 9,
  signedIn: true,
  getUserDetails: function () {
    // console.log("got user details from db");
    console.log(`username : ${this.username}`);
    console.log(this); //returns the current context
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //returns the empty opject

function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;
  return this;
}

console.log(new  User("lavish", 4, true));
console.log(new User("lavish1", 41, false));
