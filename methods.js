const arr = [1, 2, 3, 4, 5];

// const newNums = arr.filter((num) => {
// num > 1);        //will not work here we need to return the value
// }

const newNums = arr.filter((num) => num > 1);
// console.log(newNums);

// const newNum =[];
// arr.forEach((item)=>{
//     if(item>1){
//         newNum.push(item);
//     }
// })

// console.log(newNum);

const newNum = arr.map((num) => num + 100);
// console.log(newNum);

const total = arr.reduce((acc, crnVal) => acc + crnVal);
console.log(total);
