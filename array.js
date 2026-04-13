const arr = [1, 2, 3, 4, 5];
console.log();
//deep copy - not share the same reference
//shallow copy - share the same reference

const arr1 = new Array(1, 2, 3, 4, 5, 6);

console.log(arr);
arr.push(8);
console.log(arr);
arr.pop();
console.log(arr);

// console.log(arr.includes(2))

// console.log(arr.indexOf(2))

//++++++++++ slice and aplice++++++++++++++++++++++++++++++

const arr3 = [10, 20, 30, 40, 50, 60];

console.log("A", arr3);
console.log(arr3.slice(1, 4));
console.log("B", arr3);
console.log(arr3.splice(1, 4)); //this also change the array
console.log("C", arr3);

// A [ 10, 20, 30, 40, 50, 60 ]
// [ 20, 30, 40 ]
// B [ 10, 20, 30, 40, 50, 60 ]
// [ 20, 30, 40, 50 ]
// C [ 10, 60 ]
