const user = new Object();
// console.log(user);

user.name = "vandana";
user.age = 21;
// console.log(user);

const obj1 = { 1: "A", 2: "B" };
const obj2 = { 3: "C", 4: "D" };
console.log(Object.assign(obj1, obj2)); //to combine the objects and it returns the new object which contains the values of the obj1, obj2

//the easiest way to do this
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(Object.keys(user)); //it will return the array of the keys
console.log(Object.values(user)); //it will return the array of the values
console.log(Object.entries(user)); //it will return the array of the key value pair

console.log(user.hasOwnProperty("age"));
