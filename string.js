const name = "lavish";
const repoCount = 10;

console.log(name + repoCount);

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const st = new String("hello");
console.log(st.__proto__); //only used on the browser

console.log(st.charAt(2));
console.log(st.indexOf("h"));
console.log("\n");

const str = "hello is the first word";

console.log(str.substring(0, 4));
console.log(str.slice(0, 4));
