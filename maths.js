console.log(Math);

console.log(Math.abs(-4)); // to neglate the negative value

console.log(Math.round(3.14));
console.log(Math.round(3.94));

console.log(Math.ceil(4.01)); // will give the top value
console.log(Math.floor(4.99)); // will give the low value or can say the before . value

console.log(Math.sqrt(144));

console.log(Math.min(3, 4, 9, 1, 9));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//4 digit otp
const min1 = 1000;
const max1 = 9999;
console.log(Math.floor(Math.random() * (max1 - min1 + 1)) + min1);


//6 digit otp
const min2 = 100000;
const max2 = 999999;
console.log(Math.floor(Math.random() * (max2 - min2 + 1)) + min2);