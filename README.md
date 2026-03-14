# JavaScript Notes (Chai aur Code — Hitesh Choudhary)

---

## 📦 Modules / Table of Contents

1. [Variables — let, var, const](#1-variables--let-var-and-const)
2. [Data Types](#2-data-types)
3. [Type Conversion & Operations](#3-type-conversion--operations)
4. [Strings](#4-strings)
5. [Numbers & Math](#5-numbers--math)
6. [Arrays](#6-arrays)
7. [Objects](#7-objects)
8. [Functions & Arrow Functions](#8-functions--arrow-functions)
9. [Control Flow — if, else, switch](#9-control-flow--if-else-switch)
10. [Nullish Coalescing & Ternary](#10-nullish-coalescing--ternary-operator)
11. [Iterations — Loops](#11-iterations--loops)
12. [ES6+ Features](#12-es6-features)
13. [Scope & Hoisting](#13-scope--hoisting)
14. [DOM Manipulation](#14-dom-manipulation)
15. [Events](#15-events)
16. [Advanced — Closures, IIFE, this](#16-advanced--closures-iife-and-this)
17. [Classes & OOP](#17-classes--oop)
18. [Promises, Async/Await, Fetch API](#18-promises-asyncawait--fetch-api)
19. [ES6 Modules — import / export](#19-es6-modules--import--export)
20. [Miscellaneous — Fun with JS](#20-miscellaneous--fun-with-js)

---

## 1. Variables — let, var, and const

### `var`
- Function-scoped (not block-scoped)
- Gets **hoisted** to the top of its scope (initialized as `undefined`)
- Can be re-declared and updated
- Avoid using in modern JS — leads to bugs

```js
var name = "Hitesh"
var name = "Chai"  // re-declaration allowed ✅
console.log(name)  // Chai
```

### `let`
- **Block-scoped** `{}`
- Hoisted but NOT initialized (Temporal Dead Zone — TDZ)
- Cannot be re-declared in the same scope
- Can be updated

```js
let age = 18
age = 20          // update allowed ✅
// let age = 25   // re-declaration ❌ SyntaxError
```

### `const`
- **Block-scoped**
- Cannot be updated or re-declared
- Must be initialized at declaration
- Objects and arrays declared with `const` can still have their contents mutated

```js
const PI = 3.14
// PI = 3.15  // ❌ TypeError

const user = { name: "Chai" }
user.name = "Code"  // ✅ allowed — mutation, not reassignment
```

### Quick Comparison

| Feature         | var       | let       | const     |
|----------------|-----------|-----------|-----------|
| Scope          | Function  | Block     | Block     |
| Hoisting       | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Re-declare     | ✅        | ❌        | ❌        |
| Re-assign      | ✅        | ✅        | ❌        |

---

## 2. Data Types

### Primitive (stored by value)
```js
let myName = "Chai"         // String
let age = 18                // Number
let isLoggedIn = true       // Boolean
let nothing = null          // Null (intentional empty)
let notDefined = undefined  // Undefined
let id = Symbol("id")       // Symbol (unique)
let bigNum = 1234567890n    // BigInt
```

### Reference (stored by reference)
```js
let arr = [1, 2, 3]          // Array
let obj = { key: "value" }   // Object
let fn = function() {}       // Function
```

### `typeof` operator
```js
typeof "Chai"       // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  ← known JS quirk!
typeof Symbol()     // "symbol"
typeof function(){} // "function"
```

---

## 3. Type Conversion & Operations

### String to Number
```js
Number("33")       // 33
Number("33abc")    // NaN
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN
```

### Number to String
```js
String(33)         // "33"
String(true)       // "true"
(33).toString()    // "33"
```

### parseInt & parseFloat
```js
parseInt("33.9")   // 33
parseFloat("33.9") // 33.9
```

### Operations & Type Coercion
```js
"3" + 3        // "33"  ← string concatenation
3 + "3"        // "33"
3 + 3 + "3"   // "63"  ← left to right
"3" + 3 + 3   // "333"

true + 1       // 2
null + 1       // 1
undefined + 1  // NaN
```

---

## 4. Strings

```js
const name = "Hitesh"
const city = "Jaipur"

// Template literals (preferred)
console.log(`Hello, my name is ${name} and I live in ${city}`)

// Common string methods
name.length           // 6
name.toUpperCase()    // "HITESH"
name.toLowerCase()    // "hitesh"
name.includes("ite")  // true
name.startsWith("Hi") // true
name.endsWith("sh")   // true
name.slice(0, 3)      // "Hit"
name.replace("Hitesh", "Chai") // "Chai"
"  hello  ".trim()    // "hello"
"chai".repeat(3)      // "chaichaichai"
"a,b,c".split(",")    // ["a", "b", "c"]
```

---

## 5. Numbers & Math

```js
const num = 3.14159
num.toFixed(2)         // "3.14" (returns string)
num.toPrecision(4)     // "3.142"
Number.isInteger(4)    // true
Number.isNaN(NaN)      // true
Number.MAX_VALUE       // 1.79e+308
Number.MIN_VALUE       // 5e-324

Math.abs(-5)           // 5
Math.round(4.6)        // 5
Math.ceil(4.1)         // 5
Math.floor(4.9)        // 4
Math.sqrt(25)          // 5
Math.pow(2, 10)        // 1024
Math.min(1, 2, 3)      // 1
Math.max(1, 2, 3)      // 3
Math.random()          // 0 to <1 (random)

// Random number between min and max (inclusive)
const min = 10, max = 20
Math.floor(Math.random() * (max - min + 1)) + min
```

---

## 6. Arrays

### Creation
```js
const arr = [1, 2, 3, 4, 5]
const arr2 = new Array(3)     // [empty × 3]
```

### Common Methods
```js
arr.push(6)         // add to end → [1,2,3,4,5,6]
arr.pop()           // remove from end
arr.unshift(0)      // add to start → [0,1,2,3,4,5]
arr.shift()         // remove from start
arr.includes(3)     // true
arr.indexOf(3)      // 2
arr.join("-")       // "1-2-3-4-5"
arr.reverse()       // reverses in place
arr.slice(1, 3)     // [2, 3] (doesn't mutate)
arr.splice(1, 2)    // removes 2 elements from index 1 (mutates)
```

### Spread & Merge
```js
const a = [1, 2]
const b = [3, 4]
const merged = [...a, ...b]  // [1, 2, 3, 4]
```

### Flat
```js
const nested = [1, [2, 3], [4, [5, 6]]]
nested.flat()        // [1, 2, 3, 4, [5, 6]]
nested.flat(Infinity) // [1, 2, 3, 4, 5, 6]
```

### Higher-Order Array Methods
```js
const nums = [1, 2, 3, 4, 5]

nums.forEach(n => console.log(n))             // iterate (returns undefined)
nums.map(n => n * 2)                          // [2, 4, 6, 8, 10]
nums.filter(n => n % 2 === 0)                 // [2, 4]
nums.reduce((acc, curr) => acc + curr, 0)     // 15
nums.find(n => n > 3)                         // 4
nums.findIndex(n => n > 3)                    // 3
nums.every(n => n > 0)                        // true
nums.some(n => n > 4)                         // true
```

---

## 7. Objects

### Creation & Access
```js
const user = {
  name: "Hitesh",
  age: 36,
  isLoggedIn: false
}

user.name          // "Hitesh" — dot notation
user["age"]        // 36 — bracket notation (useful for dynamic keys)
```

### Methods in Objects
```js
const user = {
  name: "Chai",
  greet() {
    console.log(`Hello, I am ${this.name}`)
  }
}
user.greet()  // Hello, I am Chai
```

### Object Methods
```js
Object.keys(user)    // ["name", "age", "isLoggedIn"]
Object.values(user)  // ["Hitesh", 36, false]
Object.entries(user) // [["name","Hitesh"], ["age",36], ...]
Object.assign({}, user, { city: "Jaipur" })  // merge
const clone = { ...user }  // spread clone
```

### Destructuring
```js
const { name, age } = user
const { name: fullName } = user  // rename while destructuring

// Default values
const { city = "Mumbai" } = user
```

### Nested Object
```js
const profile = {
  name: "Hitesh",
  address: {
    city: "Jaipur",
    pin: 302001
  }
}
profile.address.city  // "Jaipur"
```

---

## 8. Functions & Arrow Functions

### Regular Function
```js
function greet(name) {
  return `Hello, ${name}`
}
greet("Chai")
```

### Function Expression
```js
const greet = function(name) {
  return `Hello, ${name}`
}
```

### Arrow Function
```js
const greet = (name) => `Hello, ${name}`

// No parameters
const sayHi = () => "Hi!"

// Multiple statements
const add = (a, b) => {
  const sum = a + b
  return sum
}
```

### Default Parameters
```js
function greet(name = "User") {
  return `Hello, ${name}`
}
greet()         // "Hello, User"
greet("Hitesh") // "Hello, Hitesh"
```

### Rest Parameters
```js
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0)
}
sum(1, 2, 3, 4)  // 10
```

### `this` in Arrow vs Regular
```js
const obj = {
  value: 10,
  regular: function() { console.log(this.value) }, // 10
  arrow: () => { console.log(this.value) }          // undefined (this = outer scope)
}
```

---

## 9. Control Flow — if, else, switch

### if / else if / else
```js
const score = 75

if (score >= 90) {
  console.log("A grade")
} else if (score >= 75) {
  console.log("B grade")
} else {
  console.log("Needs improvement")
}
```

### switch
```js
const day = "Monday"

switch(day) {
  case "Monday":
    console.log("Start of the week")
    break
  case "Friday":
    console.log("Weekend soon!")
    break
  default:
    console.log("Just another day")
}
```

---

## 10. Nullish Coalescing & Ternary Operator

### Ternary
```js
const price = 100
price <= 80 ? console.log("Cheap") : console.log("Expensive")
```

### Nullish Coalescing (`??`)
- Returns right side only if left side is `null` or `undefined`
- Does NOT trigger for `0`, `""`, or `false` (unlike `||`)

```js
let val = null ?? "Default"    // "Default"
let val2 = 0 ?? "Default"      // 0  ← 0 is not null/undefined
let val3 = undefined ?? "Hey"  // "Hey"
```

### Optional Chaining (`?.`)
```js
const user = { address: { city: "Jaipur" } }
user?.address?.city    // "Jaipur"
user?.phone?.number    // undefined (no error thrown)
```

---

## 11. Iterations — Loops

### for
```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

### while
```js
let i = 0
while (i < 5) {
  console.log(i)
  i++
}
```

### do...while
```js
let i = 0
do {
  console.log(i)
  i++
} while (i < 5)
```

### for...of (Arrays, Strings, Maps, Sets)
```js
const arr = [10, 20, 30]
for (const item of arr) {
  console.log(item)
}

for (const char of "Chai") {
  console.log(char)
}
```

### for...in (Objects — iterates over keys)
```js
const user = { name: "Hitesh", age: 36 }
for (const key in user) {
  console.log(`${key}: ${user[key]}`)
}
```

### forEach (Arrays only)
```js
[1, 2, 3].forEach((item, index) => {
  console.log(index, item)
})
```

---

## 12. ES6+ Features

### Template Literals
```js
const name = "Chai"
console.log(`Hello ${name}!`)  // multi-line strings also supported
```

### Destructuring
```js
// Array
const [a, b, c] = [1, 2, 3]

// Object
const { name, age } = { name: "Hitesh", age: 36 }

// Swap variables
let x = 1, y = 2
;[x, y] = [y, x]
```

### Spread Operator (`...`)
```js
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]          // [1, 2, 3, 4, 5]

const obj1 = { a: 1 }
const obj2 = { ...obj1, b: 2 }        // { a: 1, b: 2 }
```

### Rest Operator (`...`)
```js
const [first, ...rest] = [1, 2, 3, 4]
// first = 1, rest = [2, 3, 4]

function logAll(a, b, ...others) {
  console.log(others)  // remaining args as array
}
```

### Short-circuit & Logical Assignment
```js
let a = null
a = a ?? "default"    // "default"
a ||= "fallback"      // assign if falsy
a &&= "updated"       // assign if truthy
```

### Map & Set
```js
// Map — key-value pairs (any type as key)
const map = new Map()
map.set("name", "Hitesh")
map.get("name")  // "Hitesh"
map.has("name")  // true
map.size         // 1

for (const [key, val] of map) {
  console.log(key, val)
}

// Set — unique values only
const set = new Set([1, 2, 3, 2, 1])
// Set {1, 2, 3}
set.add(4)
set.has(2)   // true
set.delete(1)
set.size     // 3
```

---

## 13. Scope & Hoisting

### Scope Types
```js
// Global scope
var globalVar = "I'm global"

function outer() {
  // Function scope
  let outerLet = "outer"

  function inner() {
    // Block scope — has access to outer via closure
    console.log(outerLet)  // "outer" ✅
  }
  inner()
}
```

### Hoisting
```js
// var is hoisted and initialized as undefined
console.log(x)  // undefined (no error)
var x = 5

// let/const are hoisted but NOT initialized (TDZ)
// console.log(y)  // ReferenceError: Cannot access 'y' before initialization
let y = 10

// Function declarations are fully hoisted
greet()          // "Hello" ✅
function greet() { console.log("Hello") }

// Function expressions are NOT hoisted
// sayHi()       // TypeError
const sayHi = () => "Hi"
```

---

## 14. DOM Manipulation

### Selecting Elements
```js
document.getElementById("myId")
document.querySelector(".myClass")       // first match
document.querySelectorAll("p")           // NodeList of all <p>
document.getElementsByClassName("box")  // HTMLCollection
```

### Modifying Elements
```js
const el = document.querySelector("h1")

el.textContent = "New Heading"         // text only
el.innerHTML = "<b>Bold Heading</b>"   // HTML content
el.innerText = "Visible text"          // respects CSS visibility

el.style.color = "red"
el.style.backgroundColor = "yellow"

el.classList.add("active")
el.classList.remove("hidden")
el.classList.toggle("dark")
el.classList.contains("active")  // true/false
```

### Creating & Inserting Elements
```js
const div = document.createElement("div")
div.textContent = "Hello"
div.id = "newDiv"
document.body.appendChild(div)

// Modern methods
parent.append(child)         // can take strings too
parent.prepend(child)
child.remove()
parent.removeChild(child)
```

### Traversing DOM
```js
el.parentElement
el.children          // HTMLCollection of child elements
el.firstElementChild
el.lastElementChild
el.nextElementSibling
el.previousElementSibling
```

---

## 15. Events

### addEventListener
```js
const btn = document.querySelector("button")

btn.addEventListener("click", function(event) {
  console.log(event)
  console.log(event.target)    // element that was clicked
  console.log(event.type)      // "click"
})
```

### Common Events
```js
"click"       // mouse click
"dblclick"    // double click
"mouseover"   // hover in
"mouseout"    // hover out
"keydown"     // key pressed
"keyup"       // key released
"input"       // input value changes
"change"      // form field changed
"submit"      // form submission
"load"        // page loaded
"scroll"      // page/element scrolled
```

### Event Bubbling & Delegation
```js
// Bubbling: event travels from child → parent
// stopPropagation to prevent bubbling
btn.addEventListener("click", (e) => {
  e.stopPropagation()
})

// preventDefault — e.g., stop form from submitting
form.addEventListener("submit", (e) => {
  e.preventDefault()
})

// Event Delegation — listen on parent, act on children
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent)
  }
})
```

---

## 16. Advanced — Closures, IIFE, and `this`

### Closures
A function that remembers the variables from its outer scope even after the outer function has returned.

```js
function makeCounter() {
  let count = 0
  return function() {
    count++
    console.log(count)
  }
}

const counter = makeCounter()
counter()  // 1
counter()  // 2
counter()  // 3
```

### IIFE (Immediately Invoked Function Expression)
Used to avoid polluting the global scope — common in database connections, module setups.

```js
(function chai() {
  console.log("DB CONNECTED")
})()

// Arrow IIFE with argument
((name) => {
  console.log(`DB CONNECTED TWO ${name}`)
})("hitesh")
```

### `this` keyword
```js
// In global scope (browser)
console.log(this)  // window

// In a function (non-strict)
function showThis() {
  console.log(this)  // window
}

// In an object method
const obj = {
  name: "Chai",
  show() {
    console.log(this.name)  // "Chai"
  }
}

// Arrow functions don't have their own `this`
const obj2 = {
  name: "Code",
  show: () => {
    console.log(this.name)  // undefined (takes outer `this`)
  }
}
```

### call, apply, bind
```js
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`)
}

const user = { name: "Hitesh" }

greet.call(user, "Hello", "!")    // Hello, Hitesh!
greet.apply(user, ["Hi", "?"])    // Hi, Hitesh?
const boundGreet = greet.bind(user, "Hey")
boundGreet(".")                   // Hey, Hitesh.
```

---

## 17. Classes & OOP

### Class Basics
```js
class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`)
  }
}

const user1 = new User("Hitesh", "hitesh@example.com")
user1.greet()
```

### Inheritance
```js
class Admin extends User {
  constructor(name, email, role) {
    super(name, email)  // calls parent constructor
    this.role = role
  }

  showRole() {
    console.log(`${this.name} is a ${this.role}`)
  }
}

const admin = new Admin("Hitesh", "h@h.com", "Admin")
admin.greet()     // inherited
admin.showRole()  // own method
```

### Static Methods
```js
class MathUtil {
  static add(a, b) { return a + b }
}
MathUtil.add(2, 3)  // 5 — called on class, not instance
```

### Getters & Setters
```js
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  get area() {
    return Math.PI * this.radius ** 2
  }
  set diameter(d) {
    this.radius = d / 2
  }
}

const c = new Circle(5)
console.log(c.area)   // 78.53...
c.diameter = 20       // sets radius to 10
```

### Prototype (under the hood)
```js
function Person(name) {
  this.name = name
}
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`)
}
const p = new Person("Chai")
p.greet()
```

---

## 18. Promises, Async/Await & Fetch API

### Callbacks (the old way)
```js
function fetchData(callback) {
  setTimeout(() => callback("Data received"), 1000)
}
fetchData((data) => console.log(data))
```

### Promise
```js
const promise = new Promise((resolve, reject) => {
  const success = true
  if (success) resolve("Done!")
  else reject("Error!")
})

promise
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Always runs"))
```

### Promise chaining
```js
fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
```

### Async / Await
```js
async function getUsers() {
  try {
    const res = await fetch("https://api.github.com/users")
    const data = await res.json()
    console.log(data)
  } catch (err) {
    console.error("Error:", err)
  }
}
getUsers()
```

### Promise.all
```js
const [users, posts] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/posts").then(r => r.json())
])
```

---

## 19. ES6 Modules — import / export

### Named Export
```js
// math.js
export const add = (a, b) => a + b
export const PI = 3.14

// main.js
import { add, PI } from "./math.js"
import { add as addition } from "./math.js"  // alias
```

### Default Export
```js
// greet.js
export default function greet(name) {
  return `Hello, ${name}`
}

// main.js
import greet from "./greet.js"      // any name works for default
import myGreet from "./greet.js"    // also valid
```

### Export All
```js
import * as MathUtils from "./math.js"
MathUtils.add(2, 3)
MathUtils.PI
```

### Key Rules
- Each file can have only **one** `default` export
- Can have **multiple** named exports
- `import` statements are hoisted to the top
- Modules use **strict mode** by default
- Use `type="module"` in `<script>` tag in HTML

```html
<script type="module" src="main.js"></script>
```

---

## 20. Miscellaneous — Fun with JS

### Error Handling
```js
try {
  JSON.parse("invalid json")
} catch (error) {
  console.log(error.name)     // SyntaxError
  console.log(error.message)
} finally {
  console.log("Cleanup here")
}

// Custom Errors
class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = "ValidationError"
  }
}
throw new ValidationError("Email is invalid")
```

### setTimeout & setInterval
```js
setTimeout(() => console.log("Runs once after 2s"), 2000)

const id = setInterval(() => console.log("Runs every 1s"), 1000)
clearInterval(id)  // stop it
```

### localStorage & sessionStorage
```js
localStorage.setItem("user", JSON.stringify({ name: "Hitesh" }))
const user = JSON.parse(localStorage.getItem("user"))
localStorage.removeItem("user")
localStorage.clear()
```

### Spread in real use
```js
// Copy without reference
const original = { a: 1, b: { c: 2 } }
const copy = { ...original }   // shallow copy
```

### Chaining methods
```js
const result = [1, 2, 3, 4, 5]
  .filter(n => n % 2 !== 0)  // [1, 3, 5]
  .map(n => n * 10)           // [10, 30, 50]
  .reduce((acc, n) => acc + n, 0)  // 90
```

### JSON
```js
const obj = { name: "Chai", age: 2 }
const json = JSON.stringify(obj)   // '{"name":"Chai","age":2}'
const back = JSON.parse(json)      // { name: "Chai", age: 2 }
```

---

> 📺 Based on [Chai aur Code — JavaScript Series](https://github.com/hiteshchoudhary/js-hindi-youtube) by **Hitesh Choudhary**