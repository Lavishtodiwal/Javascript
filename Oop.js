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
