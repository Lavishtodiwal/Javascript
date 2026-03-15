const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const heros = ["krishna", "mahakal", "ganesha"];
const heros1 = ["A", "B", "C"];
// heros.push(arr); //add array as it to the array and becomes the array of the array
// console.log(heros);

const newArr = heros.concat(heros1); // returns the new array
// console.log(newArr);

const spreadValues = [...arr, ...heros, ...heros1];
// console.log(spreadValues);

const arr_of_arr = [1, 2, 3, [2, 3, 4, 3], 9, 2, [2, 4, 5, [3, 3, 3]]];

const realArr = arr_of_arr.flat(Infinity);

// console.log(realArr);

console.log(Array.from("Lavish"));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));

