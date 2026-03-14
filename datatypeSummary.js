//primitive(7)-> call by value -> use the Stack
// String , Number, Boolean, null, undefined,Symbol,BigInt

const id = Symbol("123");
const id2 = Symbol("123");

console.log(id === id2);

//reference (non primitive)

//Array, Objects, Functions -> uses the Heap
// objects;

{
  name = "lavi";
}

const func = function () {
  console.log(hello);
};

console.log(func);
