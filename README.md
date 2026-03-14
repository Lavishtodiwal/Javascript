# 📘 JavaScript — Interview Preparation Notes
> Based on **Chai aur Code** by Hitesh Choudhary | Full Syllabus + Interview Q&A

---

## 📚 Table of Contents

1. [Variables — let, var & const](#1-variables--let-var--const)
2. [Data Types & Type Coercion](#2-data-types--type-coercion)
3. [Functions & Arrow Functions](#3-functions--arrow-functions)
4. [Scope, Hoisting & Execution Context](#4-scope-hoisting--execution-context)
5. [Arrays — Methods & Patterns](#5-arrays--methods--patterns)
6. [Objects — Deep Dive](#6-objects--deep-dive)
7. [Control Flow](#7-control-flow)
8. [Iterations & Loops](#8-iterations--loops)
9. [ES6+ Features](#9-es6-features)
10. [Async JS — Callbacks → Promises → Async/Await](#10-async-js--callbacks--promises--asyncawait)
11. [OOP — Prototypes, Classes & Inheritance](#11-oop--prototypes-classes--inheritance)
12. [DOM Manipulation](#12-dom-manipulation)
13. [Events](#13-events)
14. [ES6 Modules — import / export](#14-es6-modules--import--export)
15. [Advanced Patterns — Closures, IIFE & Currying](#15-advanced-patterns--closures-iife--currying)
16. [Error Handling](#16-error-handling)
17. [Miscellaneous — Storage, JSON & Timers](#17-miscellaneous--storage-json--timers)
18. [Interview Quick-Fire Concepts](#18-interview-quick-fire-concepts)

---

## 1. Variables — let, var & const

### Core Concept

JavaScript has three ways to declare variables. This is **always** asked in interviews.

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block `{}` | Block `{}` |
| Hoisted? | ✅ as `undefined` | ✅ but TDZ error | ✅ but TDZ error |
| Re-declare? | ✅ Allowed | ❌ SyntaxError | ❌ SyntaxError |
| Re-assign? | ✅ Allowed | ✅ Allowed | ❌ TypeError |
| Use today? | ❌ Avoid | ✅ Preferred | ✅ Default choice |

```js
// var — function-scoped, hoists as undefined
console.log(x)  // undefined (hoisted — no error)
var x = 5
var x = 10      // re-declaration allowed ✅

// let — block-scoped
let age = 18
age = 20        // ✅ re-assignment OK
// let age = 25 // ❌ SyntaxError: already declared

// const — block-scoped, no re-assignment
const PI = 3.14
// PI = 3.15    // ❌ TypeError

// IMPORTANT: const objects/arrays can be mutated
const user = { name: "Chai" }
user.name = "Code"   // ✅ mutation allowed
user.age  = 25       // ✅ new props allowed
// user = {}         // ❌ re-assign not allowed
```

### Temporal Dead Zone (TDZ)

`let` and `const` are hoisted but NOT initialized — accessing them before their line throws `ReferenceError`. This gap is called the **TDZ**.

```js
console.log(a)  // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5

console.log(b)  // ✅ undefined  (var hoisting)
var b = 5
```

### ❓ Interview Questions

**Q: What is the difference between var, let, and const?**
> `var` is function-scoped and hoisted as `undefined`; can be re-declared. `let` is block-scoped, hoisted but in TDZ — can be reassigned, not re-declared. `const` is block-scoped, in TDZ, cannot be reassigned — but if it holds an object/array, the contents can be mutated.

**Q: What is hoisting in JavaScript?**
> Hoisting is JS's behaviour of moving declarations to the top of their scope during the compilation (memory creation) phase. `var` declarations are hoisted and initialized to `undefined`. `let` and `const` are hoisted but stay in the Temporal Dead Zone until their line. Function declarations are fully hoisted (body included).

**Q: Why should you prefer const and let over var?**
> `var` has function scope which leads to unintended bugs — especially in loops and async code. `let` and `const` are block-scoped, more predictable, and avoid hoisting surprises. Use `const` by default, `let` when you need to reassign, and avoid `var`.

> ⚠️ **GOTCHA:** `for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i)) }` prints `3, 3, 3` not `0, 1, 2`. Use `let` instead. This is one of the most popular interview trick questions.

---

## 2. Data Types & Type Coercion

### Primitive vs Reference Types

Primitives are stored **by value**. Reference types are stored **by reference** — this matters for equality checks and mutation.

| Category | Types | Stored By |
|---|---|---|
| Primitive | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` | Value (copy) |
| Reference | `Object`, `Array`, `Function`, `Map`, `Set` | Reference (pointer) |

```js
// Primitives — copied by value
let a = 10
let b = a
b = 20
console.log(a)  // 10 — unchanged ✅

// Reference — copied by reference
const obj1 = { name: "Chai" }
const obj2 = obj1         // same reference!
obj2.name = "Code"
console.log(obj1.name)    // "Code" — both affected ⚠️

// typeof — most common interview traps
typeof null          // "object"    ← known JS bug!
typeof undefined     // "undefined"
typeof []            // "object"
typeof function(){}  // "function"
typeof NaN           // "number"    ← surprising!

// Correct checks
value === null        // check for null
Array.isArray([])     // check for array
Number.isNaN(NaN)     // check for NaN
```

### Type Coercion

```js
// Implicit coercion
"5" + 3        // "53"  (number → string)
"5" - 3        // 2     (string → number)
true  + 1      // 2
false + 1      // 1
null  + 1      // 1
undefined + 1  // NaN

// == vs ===
0  == false    // true  (coercion happens)
0  === false   // false (strict: no coercion)
null == undefined   // true
null === undefined  // false
NaN  === NaN        // false  ← NaN is never equal to itself!
```

### Type Conversion

```js
Number("33")       // 33
Number("33abc")    // NaN
Number(true)       // 1
Number(null)       // 0
Number(undefined)  // NaN

String(33)         // "33"
parseInt("33.9")   // 33
parseFloat("33.9") // 33.9

Boolean(0)         // false
Boolean("")        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false
Boolean("0")       // true  ← non-empty string is truthy!
Boolean([])        // true  ← empty array is truthy!
Boolean({})        // true  ← empty object is truthy!
```

### ❓ Interview Questions

**Q: What is the difference between == and ===?**
> `==` is abstract equality — performs type coercion before comparing. `===` is strict equality — no coercion, both type AND value must match. Always prefer `===` in production code.

**Q: Why is `typeof null === "object"`?**
> A historical bug from JS's original 1995 implementation never fixed to preserve backwards compatibility. `null` is a primitive. To check for null, always use `=== null`.

**Q: What are falsy values in JavaScript?**
> `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`, `0n` (BigInt zero). Everything else is truthy — including `"0"`, `[]`, `{}`.

> ⚠️ **GOTCHA:** `NaN === NaN` is `false`. Use `Number.isNaN(value)` — not `isNaN()` which has coercion issues (`isNaN("hello")` returns `true`).

---

## 3. Functions & Arrow Functions

### Types of Functions

```js
// 1. Function Declaration — fully hoisted
greet()  // ✅ works before declaration
function greet(name = "User") {
  return `Hello, ${name}`
}

// 2. Function Expression — NOT hoisted
// sayHi()  // ❌ TypeError: sayHi is not a function
const sayHi = function(name) {
  return `Hi ${name}`
}

// 3. Arrow Function — no own 'this', no 'arguments'
const add    = (a, b) => a + b
const square = n => n * n             // single param: no parens needed
const getObj = () => ({ key: 1 })    // returning object: wrap in ()

// 4. IIFE — Immediately Invoked Function Expression
;(function() {
  console.log("Runs once, scope isolated")
})()
```

### `this` — Regular vs Arrow

```js
const obj = {
  name: "Chai",

  // Regular: 'this' = the calling object
  regular() {
    console.log(this.name)  // "Chai" ✅
  },

  // Arrow: 'this' = outer lexical scope (window in browser)
  arrow: () => {
    console.log(this.name)  // undefined ❌
  },

  // Timer fix — arrow inside regular preserves 'this'
  delayed() {
    setTimeout(() => {
      console.log(this.name)  // "Chai" ✅
    }, 1000)
  }
}
```

### call, apply, bind

```js
function greet(greeting, punct) {
  return `${greeting}, ${this.name}${punct}`
}
const user = { name: "Hitesh" }

greet.call(user, "Hello", "!")    // "Hello, Hitesh!"  — args one by one
greet.apply(user, ["Hello", "!"]) // "Hello, Hitesh!"  — args as array
const fn = greet.bind(user, "Hey")// returns NEW function, doesn't call yet
fn(".")                           // "Hey, Hitesh."
```

| Method | Calls immediately? | Args format |
|---|---|---|
| `call` | ✅ Yes | Comma-separated |
| `apply` | ✅ Yes | Array |
| `bind` | ❌ Returns new fn | Comma-separated |

### Default, Rest & Spread in Functions

```js
// Default parameters
function greet(name = "User", lang = "en") {
  return lang === "en" ? `Hello, ${name}` : `Hola, ${name}`
}

// Rest parameters — collects remaining args as array
function sum(first, ...nums) {
  return nums.reduce((acc, n) => acc + n, first)
}
sum(1, 2, 3, 4)  // 10

// Spread in function call
const nums = [1, 2, 3]
Math.max(...nums)  // 3
```

### ❓ Interview Questions

**Q: What is the difference between regular functions and arrow functions?**
> Arrow functions: (1) don't have their own `this` — inherit from enclosing scope, (2) no `arguments` object, (3) cannot be used as constructors (`new` throws TypeError), (4) no `prototype` property, (5) cannot be generator functions.

**Q: What is the difference between call, apply, and bind?**
> All three explicitly set `this`. `call` invokes immediately, args one by one. `apply` invokes immediately, args as array. `bind` returns a **new function** with `this` permanently bound — useful for passing object methods as callbacks.

**Q: What is the difference between function declaration and function expression?**
> Function declarations (`function foo(){}`) are fully hoisted — callable before they appear. Function expressions (`const foo = function(){}`) are not hoisted as functions — only the variable declaration is hoisted.

> ⚠️ **GOTCHA:** Arrow functions cannot be used as constructors — `new (() => {})()` throws `TypeError`. They also have no `arguments` object — use rest params instead.

---

## 4. Scope, Hoisting & Execution Context

### Execution Context

Every time JS runs code, it creates an **Execution Context**. Every function call pushes a new one onto the **Call Stack**.

Each EC has two phases:
1. **Memory Creation Phase** — variables hoisted as `undefined`, functions stored fully
2. **Code Execution Phase** — code runs line by line

```js
// Call Stack visualization
function first() {
  console.log("first start")
  second()
  console.log("first end")
}
function second() { console.log("second") }
first()

// Stack:
// [global EC]
// [global EC] → [first EC]
// [global EC] → [first EC] → [second EC]
// [global EC] → [first EC]   (second popped)
// [global EC]                (first popped)
```

### Scope Chain

```js
const globalVar = "global"

function outer() {
  const outerVar = "outer"

  function inner() {
    const innerVar = "inner"
    // Can access: innerVar ✅, outerVar ✅, globalVar ✅
    console.log(outerVar)  // scope chain lookup goes up
  }
  // Cannot access: innerVar ❌
}
// Cannot access: outerVar ❌, innerVar ❌
```

### Hoisting in Detail

```js
// Function declarations — fully hoisted
sayHello()  // ✅ "Hello"
function sayHello() { console.log("Hello") }

// var — hoisted as undefined
console.log(name)  // undefined (no error)
var name = "Chai"

// let / const — hoisted but in TDZ
console.log(age)   // ❌ ReferenceError
let age = 25

// Function expression — NOT hoisted as function
greet()            // ❌ TypeError: greet is not a function
var greet = function() { console.log("hi") }
```

### ❓ Interview Questions

**Q: What is the Execution Context in JavaScript?**
> The environment in which JS code is evaluated and executed. Global EC is created once; Function EC is created per function call. Each has a Memory phase (hoisting) and Execution phase. The Call Stack manages them — LIFO.

**Q: What is the scope chain?**
> When JS looks up a variable, it starts in the current scope and moves outward (enclosing function → global) until found or throws ReferenceError. Determined lexically — by where functions are written, not called.

---

## 5. Arrays — Methods & Patterns

### All Key Methods

| Method | Returns | Mutates? | Use Case |
|---|---|---|---|
| `map()` | New array (same length) | ❌ No | Transform each element |
| `filter()` | New array (shorter) | ❌ No | Keep elements matching condition |
| `reduce()` | Single value | ❌ No | Accumulate to one value |
| `forEach()` | `undefined` | ❌ No | Side effects, no chaining |
| `find()` | First match or `undefined` | ❌ No | Find one element |
| `findIndex()` | Index or `-1` | ❌ No | Find index of element |
| `some()` | Boolean | ❌ No | At least one matches |
| `every()` | Boolean | ❌ No | All must match |
| `flat()` | New flattened array | ❌ No | Flatten nested arrays |
| `slice()` | New sub-array | ❌ No | Extract a portion |
| `sort()` | Sorted array (same ref) | ✅ **Yes** | Sort in place |
| `splice()` | Removed elements | ✅ **Yes** | Add/remove at index |
| `push/pop()` | New length / removed item | ✅ **Yes** | Add/remove from end |
| `shift/unshift()` | Removed item / new length | ✅ **Yes** | Add/remove from start |
| `reverse()` | Reversed array (same ref) | ✅ **Yes** | Reverse in place |

```js
const nums = [1, 2, 3, 4, 5]

nums.map(n => n * 2)                  // [2, 4, 6, 8, 10]
nums.filter(n => n % 2 === 0)         // [2, 4]
nums.reduce((acc, n) => acc + n, 0)   // 15
nums.find(n => n > 3)                 // 4
nums.findIndex(n => n > 3)            // 3
nums.some(n => n > 4)                 // true
nums.every(n => n > 0)                // true

[1,[2,[3,[4]]]].flat(Infinity)        // [1, 2, 3, 4]
["hello","world"].flatMap(w => w.split(""))  // ["h","e","l","l","o",...]

// Method chaining
nums
  .filter(n => n > 2)        // [3, 4, 5]
  .map(n => n * 10)          // [30, 40, 50]
  .reduce((a, b) => a + b)   // 120
```

### Spread, Destructuring & Useful Patterns

```js
// Spread — merge / clone
const merged = [...arr1, ...arr2]
const clone  = [...original]

// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5]

// Swap variables
;[x, y] = [y, x]

// Remove duplicates
const unique = [...new Set([1, 2, 2, 3, 3])]  // [1, 2, 3]

// Array.from
Array.from("Chai")                      // ["C","h","a","i"]
Array.from({ length: 3 }, (_, i) => i) // [0, 1, 2]
```

### ❓ Interview Questions

**Q: What is the difference between map, filter, and reduce?**
> `map` transforms every element, same length array. `filter` keeps matching elements, shorter array. `reduce` accumulates all elements into a single value. All three are non-mutating.

**Q: What is the difference between slice and splice?**
> `slice(start, end)` returns a new sub-array, does NOT modify original. `splice(start, deleteCount, ...items)` modifies the original — removes/inserts elements. **slice = no mutation, splice = mutation**.

> ⚠️ **GOTCHA:** `[10, 9, 2].sort()` returns `[10, 2, 9]` — JS sorts lexicographically by default. Always pass a comparator: `.sort((a, b) => a - b)` for numeric sort.

> ⚠️ **GOTCHA:** `forEach` always returns `undefined` — cannot chain it. Use `map` if you need the result array.

---

## 6. Objects — Deep Dive

### Creation, Access & Static Methods

```js
const user = {
  name: "Hitesh",
  age: 36,
  greet() { console.log(`Hello, I'm ${this.name}`) }
}

user.name          // dot notation
user["age"]        // bracket notation — use for dynamic keys
const key = "name"
user[key]          // "Hitesh"

Object.keys(user)    // ["name", "age", "greet"]
Object.values(user)  // ["Hitesh", 36, f]
Object.entries(user) // [["name","Hitesh"], ["age",36], ...]
Object.assign({}, user, { city: "Jaipur" })
Object.freeze(user)  // makes object immutable
```

### Destructuring

```js
const { name, age }          = user              // basic
const { name: fullName }     = user              // rename
const { city = "Mumbai" }    = user              // default value
const { address: { city } }  = profile           // nested

// In function params
function display({ name, age = 18 }) {
  console.log(name, age)
}

// Computed property names
const prop = "name"
const obj  = { [prop]: "Chai" }  // { name: "Chai" }
```

### Cloning & Merging

```js
// Shallow clone
const shallow  = { ...original }
const shallow2 = Object.assign({}, original)

// Deep clone
const deep  = JSON.parse(JSON.stringify(obj))  // simple — loses functions/Date
const deep2 = structuredClone(obj)             // modern — handles Date, Map, Set
```

### Optional Chaining & Nullish Coalescing

```js
// Optional chaining
const city   = user?.address?.city     // undefined, not TypeError
const len    = arr?.[0]?.length
const result = obj?.method?.()

// Nullish coalescing — only null/undefined triggers right side
const name = user.name  ?? "Anonymous"  // for null/undefined only
const port = config.port || 3000        // for any falsy (0, "", false too)
```

### ❓ Interview Questions

**Q: How do you deep clone an object?**
> `JSON.parse(JSON.stringify(obj))` for simple objects — loses functions, Date, undefined, circular refs. Use `structuredClone(obj)` (modern) or `lodash.cloneDeep()` for complex cases. Spread `{...obj}` is only a **shallow** clone.

**Q: What is the difference between `??` and `||`?**
> `||` returns right side if left is **any falsy** (`0`, `""`, `false`, `null`, `undefined`). `??` returns right side only if left is **`null` or `undefined`** — preserves `0`, `""`, `false`. Use `??` when `0` or empty string are valid values.

> 💡 **TIP:** `Object.freeze()` makes an object truly immutable. `const` only prevents reassignment of the variable, not mutation of its properties.

---

## 7. Control Flow

```js
// if / else if / else
if      (score >= 90) console.log("A")
else if (score >= 75) console.log("B")
else                  console.log("C")

// Ternary
const grade = score >= 75 ? "Pass" : "Fail"

// switch
switch(day) {
  case "Monday":
  case "Tuesday":             // fall-through: groups cases
    console.log("Weekday")
    break
  case "Saturday":
  case "Sunday":
    console.log("Weekend")
    break
  default:
    console.log("Other")
}

// Modern pattern
const userCity = user?.address?.city ?? "City not set"
```

> ⚠️ **GOTCHA:** Always add `break` in switch. Without it, execution falls through to the next case — usually a bug unless intentional grouping.

---

## 8. Iterations & Loops

```js
const arr = [10, 20, 30]
const obj = { a: 1, b: 2, c: 3 }

// for — classic, full control, supports break/continue
for (let i = 0; i < arr.length; i++) { console.log(arr[i]) }

// while
let i = 0
while (i < arr.length) { console.log(arr[i++]) }

// do...while — runs AT LEAST once
let j = 0
do { console.log(j++) } while (j < 3)

// for...of — arrays, strings, Maps, Sets (any iterable)
for (const item of arr) console.log(item)
for (const char of "Chai") console.log(char)
for (const [key, val] of map) console.log(key, val)

// for...in — object keys ONLY
for (const key in obj) { console.log(key, obj[key]) }

// forEach — arrays, no break/continue, returns undefined
arr.forEach((item, index) => console.log(index, item))
```

### Loop Control

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outer  // skip to next i
    if (i === 2) break outer     // exit both loops
  }
}
```

### ❓ Interview Questions

**Q: What is the difference between for...of and for...in?**
> `for...of` iterates over **values** of any iterable (array, string, Map, Set). `for...in` iterates over **enumerable property keys** of an object. Don't use `for...in` on arrays — it also picks up inherited/prototype properties.

**Q: Why can't you use break inside forEach?**
> `forEach` is a callback-based method — `break`/`continue` are loop statements only valid inside `for`/`while`/`for...of`. To break early, use a regular `for` loop, `for...of`, `Array.some()` (return `true` to stop), or `Array.every()` (return `false` to stop).

---

## 9. ES6+ Features

### Template Literals, Destructuring, Spread/Rest

```js
const msg = `Hello ${name}!
Multi-line supported.`

// Array destructuring
const [a, b, ...rest] = [1, 2, 3, 4, 5]

// Object destructuring with rename + default
const { x: renameX, y = 10 } = { x: 5 }

// Spread
const arr2 = [...arr, 4, 5]
const obj2 = { ...obj1, extra: true }

// Rest in function params
const logAll = (first, ...others) => console.log(first, others)
```

### Map & Set

```js
// Map — any type as key, insertion order preserved
const map = new Map()
map.set("name", "Hitesh")
map.set(1, "one")
map.get("name")   // "Hitesh"
map.has(1)        // true
map.size          // 2
for (const [k, v] of map) console.log(k, v)

// Convert object ↔ Map
const m = new Map(Object.entries(obj))
Object.fromEntries(map)

// Set — unique values only
const set = new Set([1, 2, 2, 3, 3])  // Set { 1, 2, 3 }
set.add(4)
set.has(2)    // true
set.size      // 4

// Remove duplicates from array
const unique = [...new Set(arr)]
```

### Logical Assignment (ES2021)

```js
a ||= "default"   // assign if a is falsy
a &&= "updated"   // assign if a is truthy
a ??= "fallback"  // assign only if a is null/undefined
```

### ❓ Interview Questions

**Q: What is the difference between Map and Object?**
> Map: keys can be any type; maintains insertion order; has `.size`; directly iterable; better performance for frequent add/delete. Object: keys are strings/Symbols; may have prototype collisions; use for JSON or dot notation access.

**Q: What is the difference between Set and Array?**
> Set stores only unique values; no index-based access; faster `.has()` lookups. Array preserves duplicates; index access; full array method support. Use Set for deduplication.

---

## 10. Async JS — Callbacks → Promises → Async/Await

### The Problem: Callback Hell

```js
getUser(id, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      // deeply nested, error handling is a nightmare
    })
  })
})
```

### Promises

**States:** `pending` → `fulfilled` OR `rejected`

```js
const fetchUser = (id) => new Promise((resolve, reject) => {
  if (id > 0) resolve({ id, name: "Hitesh" })
  else        reject(new Error("Invalid ID"))
})

fetchUser(1)
  .then(user => getPosts(user.id))       // return new promise to chain
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err))      // catches any error in the chain
  .finally(() => console.log("done"))
```

### Promise Combinators

| Method | Resolves when | Rejects when | Use case |
|---|---|---|---|
| `Promise.all` | All resolve | Any rejects | Need all, fail fast |
| `Promise.allSettled` | All settle | Never | Need all regardless |
| `Promise.race` | First settles | First rejects | Timeout patterns |
| `Promise.any` | First resolves | All reject | First success wins |

```js
// Parallel fetching
const [users, posts] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/posts").then(r => r.json()),
])

// Get all results regardless of failures
const results = await Promise.allSettled([p1, p2, p3])
results.forEach(r => {
  if (r.status === "fulfilled") console.log(r.value)
  else                          console.log(r.reason)
})
```

### Async / Await

```js
async function loadUserData(id) {
  try {
    const user     = await fetchUser(id)
    const posts    = await getPosts(user.id)
    const comments = await getComments(posts[0].id)
    return { user, posts, comments }
  } catch (err) {
    console.error("Failed:", err.message)
    throw err
  } finally {
    console.log("Cleanup")
  }
}

// Parallel — don't await sequentially when independent
async function parallel() {
  const [users, posts] = await Promise.all([getUsers(), getPosts()])
  return { users, posts }
}
```

### Event Loop — Critical for Interviews

Task priority order (after call stack is empty):
1. **Microtask Queue** — Promise `.then`, `queueMicrotask` ← **higher priority**
2. **Macrotask Queue** — `setTimeout`, `setInterval`, DOM events

```js
console.log("1")                  // sync

setTimeout(() => console.log("2"), 0)  // macrotask

Promise.resolve().then(() => console.log("3"))  // microtask

console.log("4")                  // sync

// Output: 1, 4, 3, 2
// Microtasks ALWAYS run before macrotasks!
```

### ❓ Interview Questions

**Q: What is the difference between Promise.all and Promise.allSettled?**
> `Promise.all` rejects immediately if **any** promise rejects. `Promise.allSettled` always waits for **all** to finish and gives you each result with `{ status, value/reason }`. Use `allSettled` when partial failures are acceptable.

**Q: What is the Event Loop?**
> The mechanism that allows JS to perform async operations despite being single-threaded. After the call stack empties, it first drains the Microtask Queue (Promise callbacks), then picks one task from the Macrotask Queue. Microtasks always run before macrotasks.

**Q: What is the difference between async/await and Promises?**
> Async/await is syntactic sugar over Promises — no new functionality. `async` functions always return a Promise. `await` pauses the **async function** (not the whole program) until the Promise resolves. Async/await is more readable for complex flows.

> ⚠️ **GOTCHA:** `await` inside `forEach` doesn't work — the loop doesn't wait. Use `for...of` with `await` or `Promise.all` with `.map()`.

---

## 11. OOP — Prototypes, Classes & Inheritance

### Prototypal Inheritance

```js
// Prototype chain
dog.__proto__ === Dog.prototype          // true
Dog.prototype.__proto__ === Object.prototype  // true
Object.prototype.__proto__ === null      // end of chain

// Object.create
const animal = {
  speak() { console.log(`${this.name} speaks`) }
}
const cat = Object.create(animal)
cat.name = "Cat"
cat.speak()  // "Cat speaks"
```

### ES6 Classes

```js
class Vehicle {
  #fuel = 100  // private field (truly private — ES2022)

  constructor(make, model) {
    this.make  = make
    this.model = model
  }

  describe() { return `${this.make} ${this.model}` }

  get fuelLevel()    { return this.#fuel }
  set fuelLevel(val) {
    if (val < 0 || val > 100) throw new Error("Invalid")
    this.#fuel = val
  }

  static compare(v1, v2) { return v1.make === v2.make }
}

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model)   // MUST call super() before using 'this'
    this.doors = doors
  }

  describe() {           // method override
    return `${super.describe()} with ${this.doors} doors`
  }
}

const car = new Car("Toyota", "Corolla", 4)
car instanceof Car       // true
car instanceof Vehicle   // true
```

### Mixin Pattern (Multiple Inheritance Workaround)

```js
const Flyable   = { fly()  { console.log(`${this.name} flies`) } }
const Swimmable = { swim() { console.log(`${this.name} swims`) } }

class Duck extends Animal {}
Object.assign(Duck.prototype, Flyable, Swimmable)
```

### ❓ Interview Questions

**Q: How does prototypal inheritance work?**
> Every object has `[[Prototype]]`. When you access a property, JS looks at the object first, then follows the prototype chain upward until found or reaches `null`. ES6 `class` is syntactic sugar over this prototype mechanism.

**Q: What is the difference between `__proto__` and `prototype`?**
> `prototype` is a property on **constructor functions/classes** — it's the object assigned as `[[Prototype]]` to all instances. `__proto__` is a property on **every object/instance** — it's its actual prototype. `instance.__proto__ === Constructor.prototype` is `true`.

> ⚠️ **GOTCHA:** Classes are **not hoisted** like function declarations. Private fields (`#name`) are truly private — not accessible via `Object.keys()` or any external code.

---

## 12. DOM Manipulation

### Selecting Elements

```js
document.getElementById("myId")         // fastest
document.querySelector(".myClass")      // CSS selector, first match
document.querySelectorAll("p")          // NodeList (static)
document.getElementsByClassName("box") // HTMLCollection (live, auto-updates)
```

### Modifying Elements

```js
el.textContent = "text"          // safe — no HTML parsing, no XSS
el.innerHTML   = "<b>text</b>"   // parses HTML — ⚠️ XSS risk
el.style.color = "red"
el.classList.add("active")
el.classList.toggle("dark")
el.classList.contains("active")  // true/false
el.setAttribute("data-id", 123)
el.dataset.id                    // data-* attribute access
```

### Creating & Inserting Elements

```js
const div = document.createElement("div")
div.textContent = "New element"
parent.appendChild(div)
parent.insertAdjacentElement("afterbegin", div)
el.remove()
```

### DOM Traversal

```js
el.parentElement
el.children               // element children (no text nodes)
el.firstElementChild
el.nextElementSibling
el.closest(".parent")     // traverses UP to find ancestor
```

---

## 13. Events

### Event Handling

```js
btn.addEventListener("click", function(e) {
  console.log(e.target)        // element that triggered the event
  console.log(e.currentTarget) // element the listener is on
  e.stopPropagation()          // stop bubbling up
  e.preventDefault()           // prevent default behaviour (form submit, link)
})

// Remove requires same function reference
const handler = () => {}
btn.addEventListener("click", handler)
btn.removeEventListener("click", handler)
```

### Event Delegation

```js
// One listener on parent handles all children — including dynamically added
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.matches("li.item")) {
    console.log("Clicked:", e.target.dataset.id)
  }
})
```

### Common Events

```js
// Mouse: "click", "dblclick", "mouseover", "mouseout", "mousemove"
// Keyboard: "keydown", "keyup"
// Form: "input", "change", "submit", "focus", "blur"
// Window: "DOMContentLoaded", "load", "scroll", "resize"
```

### ❓ Interview Questions

**Q: What is event delegation?**
> Attaching one listener on a **parent** element to handle events from all children via bubbling. Benefits: performance (one listener vs many), works for dynamically added elements automatically.

**Q: `DOMContentLoaded` vs `load`?**
> `DOMContentLoaded` fires when HTML is parsed, DOM is ready — doesn't wait for images/CSS. `load` fires when everything (images, stylesheets) has loaded. Prefer `DOMContentLoaded` for DOM manipulation.

> ⚠️ **GOTCHA:** `innerHTML` with untrusted user input → XSS attack. Always use `textContent` for plain text.

---

## 14. ES6 Modules — import / export

```js
// Named exports (math.js)
export const PI = 3.14159
export function add(a, b) { return a + b }

// Default export — one per file
export default function greet(name) { return `Hello, ${name}` }

// Importing
import greet from "./greet.js"               // default — any name
import { PI, add } from "./math.js"          // named — exact names
import { add as sum } from "./math.js"       // aliased
import * as MathUtils from "./math.js"       // namespace object
import greet, { PI } from "./combined.js"    // default + named

// Dynamic import — lazy loading
const module = await import("./heavy.js")

// In HTML
// <script type="module" src="main.js"></script>
```

### CommonJS vs ES Modules

| Feature | CommonJS | ES Modules |
|---|---|---|
| Syntax | `require()` / `module.exports` | `import` / `export` |
| Loading | Synchronous | Asynchronous |
| When resolved | Runtime | Parse time (static) |
| Tree-shaking | ❌ | ✅ |
| Default in | Node.js legacy | Browsers, modern Node |

### ❓ Interview Questions

**Q: What is tree-shaking?**
> Dead code elimination during bundling. Works only with ES Modules because imports are statically analyzable — unused exports are removed from the bundle. CommonJS `require()` is dynamic so bundlers can't tree-shake it.

**Q: Default export vs named export?**
> One **default** export per file — imported with any name (the "main thing"). **Named** exports can be many — imported with exact names. Best practice: named exports for utilities, default for components/classes.

---

## 15. Advanced Patterns — Closures, IIFE & Currying

### Closures

A function that retains access to its outer scope's variables even after the outer function has returned.

```js
function makeCounter(initial = 0) {
  let count = initial  // private — inaccessible from outside

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset:     () => (count = initial),
    value:     () => count
  }
}

const counter = makeCounter(10)
counter.increment()  // 11
counter.increment()  // 12
counter.value()      // 12
```

### IIFE

```js
;(function() {
  const privateVar = "not global"
  console.log("Runs immediately, scope isolated")
})()

;((name) => { console.log(`Hello, ${name}`) })("Chai")
```

### Currying

```js
// Manual currying
const multiply = a => b => a * b
const double   = multiply(2)
const triple   = multiply(3)
double(5)   // 10

// Real use: configurable logger
const log   = level => message => console.log(`[${level}] ${message}`)
const warn  = log("WARN")
const error = log("ERROR")
warn("Connection slow")  // [WARN] Connection slow
```

### Debounce & Throttle

```js
// Debounce — fires once after user STOPS triggering
// Use: search input, resize handler
function debounce(fn, delay) {
  let timer
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}
input.addEventListener("input", debounce(fetchResults, 300))

// Throttle — fires at most once per interval while triggering
// Use: scroll handler, mousemove
function throttle(fn, limit) {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
window.addEventListener("scroll", throttle(onScroll, 100))
```

### Memoization

```js
function memoize(fn) {
  const cache = new Map()
  return function(...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const result = fn.apply(this, args)
    cache.set(key, result)
    return result
  }
}

const memoFib = memoize(function fib(n) {
  return n <= 1 ? n : memoFib(n - 1) + memoFib(n - 2)
})
memoFib(40)  // instant — was O(2ⁿ) without memoization
```

### ❓ Interview Questions

**Q: What is a closure? Real-world use case.**
> When an inner function remembers variables from its outer function's scope after the outer function has returned. Uses: private state, factory functions, event handlers, debounce/throttle, module pattern, currying.

**Q: What is the difference between debounce and throttle?**
> **Debounce:** waits for a quiet period, fires **once** after user stops (e.g., search — fires 300ms after last keystroke). **Throttle:** fires at most **once per interval** while triggered (e.g., scroll — fires every 100ms max). "Wait for quiet" vs "rate limit".

**Q: What is memoization?**
> Caching function results by input — on repeat calls with same args, return cached value instead of recomputing. Implemented with a closure holding a Map. Useful for expensive pure functions (fibonacci, API calls).

---

## 16. Error Handling

```js
// try / catch / finally
try {
  JSON.parse("invalid json")
} catch (error) {
  console.log(error.name)     // SyntaxError
  console.log(error.message)
  console.log(error.stack)
} finally {
  console.log("Always runs — cleanup here")
}

// Custom Error classes
class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name       = "AppError"
    this.statusCode = statusCode
  }
}

class ValidationError extends AppError {
  constructor(field, message) {
    super(message, 400)
    this.name  = "ValidationError"
    this.field = field
  }
}

// Using custom errors
try {
  throw new ValidationError("email", "Invalid email format")
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`Validation failed on ${err.field}: ${err.message}`)
  } else if (err instanceof AppError) {
    console.log(`App error ${err.statusCode}`)
  } else {
    throw err  // re-throw unexpected errors
  }
}

// Async error handling
async function fetchData(url) {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new AppError(`HTTP ${res.status}`, res.status)
    return await res.json()
  } catch (err) {
    if (err instanceof AppError) throw err
    throw new AppError("Network error", 503)
  }
}
```

### ❓ Interview Questions

**Q: What is the purpose of `finally`?**
> Runs regardless of whether an error was thrown or caught — even if `try/catch` has a `return`. Used for cleanup: closing DB connections, resetting loading state, clearing timers.

**Q: Why re-throw errors in catch?**
> If a `catch` can only handle specific error types, it should re-throw others so they propagate to a handler that can deal with them — avoids silently swallowing unexpected errors.

---

## 17. Miscellaneous — Storage, JSON & Timers

### localStorage vs sessionStorage vs Cookies

| Feature | localStorage | sessionStorage | Cookie |
|---|---|---|---|
| Capacity | ~5–10 MB | ~5–10 MB | ~4 KB |
| Expires | Never | On tab close | Configurable |
| Sent with HTTP | ❌ | ❌ | ✅ |
| Scope | All tabs | Same tab only | Configurable |

```js
localStorage.setItem("user", JSON.stringify({ name: "Hitesh" }))
const user = JSON.parse(localStorage.getItem("user"))
localStorage.removeItem("user")
localStorage.clear()
```

### JSON

```js
JSON.stringify(obj)            // to JSON string
JSON.stringify(obj, null, 2)   // pretty-print
JSON.parse(jsonString)         // to JS object

// JSON.stringify drops: functions, symbols, undefined
JSON.stringify({ fn: () => {}, sym: Symbol(), und: undefined })
// '{}'  ← all dropped!

// Date becomes string
JSON.stringify({ d: new Date() })  // '{"d":"2024-01-01T..."}'
```

### Timers

```js
const id = setTimeout(() => console.log("once"), 2000)
clearTimeout(id)

const iid = setInterval(() => console.log("repeat"), 1000)
clearInterval(iid)

// setTimeout 0 — deferred to after call stack clears
setTimeout(() => console.log("async"), 0)
console.log("sync")  // "sync" prints first!
```

### Generators

```js
function* idGenerator() {
  let id = 1
  while (true) { yield id++ }
}
const gen = idGenerator()
gen.next()  // { value: 1, done: false }
gen.next()  // { value: 2, done: false }

function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) yield i
}
[...range(0, 10, 2)]  // [0, 2, 4, 6, 8]
```

---

## 18. Interview Quick-Fire Concepts

### Must-Know Definitions

| Concept | One-liner |
|---|---|
| **Pure Function** | Same input → same output, no side effects |
| **Side Effect** | Anything beyond return value: state mutation, API call, DOM change |
| **First-class Functions** | Functions treated as values: assignable, passable, returnable |
| **Higher-Order Function** | Takes a function as arg OR returns a function (`map`, `filter`, `debounce`) |
| **Prototype Chain** | Lookup chain: object → prototype → prototype's prototype → null |
| **Immutability** | Not mutating data; creating new values instead |
| **Event Propagation** | Capturing (top→target) then Bubbling (target→top) |
| **WeakMap/WeakSet** | Keys are objects held weakly — allow garbage collection; no iteration |
| **Proxy** | Intercepts object operations (get, set, delete) — used in Vue 3 reactivity |
| **Symbol** | Unique immutable primitive — `Symbol("id") !== Symbol("id")` |

### Classic Output Interview Questions

```js
// Q1: What is the output?
console.log(typeof typeof 42)
// typeof 42 → "number", typeof "number" → "string"
// Answer: "string"

// Q2: What is the output?
const arr = [1, 2, 3]
arr[10] = 99
console.log(arr.length)
// Answer: 11  (sparse array — holes at indices 3–9)

// Q3: What is the output?
console.log(0.1 + 0.2 === 0.3)
// Answer: false  (floating point precision)
// Fix: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON

// Q4: What is the output?
[1, 2, 3].map(parseInt)
// map passes (value, index) → parseInt(1,0), parseInt(2,1), parseInt(3,2)
// parseInt(2, 1) = NaN (base 1 invalid)
// parseInt(3, 2) = NaN (3 is not valid in base 2)
// Answer: [1, NaN, NaN]

// Q5: What is the output?
const obj = {}
const a   = { key: "a" }
const b   = { key: "b" }
obj[a] = 111
obj[b] = 222
console.log(obj[a])
// Both a and b stringify to "[object Object]" as key
// Answer: 222

// Q6: var vs let in loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}
// Answer: 3, 3, 3  (var is function-scoped, i=3 when callbacks run)

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}
// Answer: 0, 1, 2  (let creates new binding per iteration)
```

### Checklist Before Your Interview

- [ ] Can you explain the Event Loop with an output example?
- [ ] Can you implement debounce and throttle from scratch?
- [ ] Can you implement memoize from scratch?
- [ ] Do you know the difference between shallow and deep clone?
- [ ] Can you explain closure with a private counter example?
- [ ] Do you know all Promise combinators and when to use each?
- [ ] Can you explain `this` in arrow vs regular function?
- [ ] Do you know why `typeof null === "object"`?
- [ ] Can you explain prototypal inheritance vs class-based?
- [ ] Do you know why `[1,2,3].map(parseInt)` returns `[1, NaN, NaN]`?

---

> 📺 Based on **[Chai aur Code — JavaScript Series](https://github.com/hiteshchoudhary/js-hindi-youtube)** by Hitesh Choudhary
>
> 💡 Focus areas: **Closures · Event Loop · Prototypes · Async Patterns · Output-based Gotchas**
