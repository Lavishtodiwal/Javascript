# Promises & Async/Await Complete Notes

---

# 1. What is a Promise?

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation.

A Promise has **3 states**:

* Pending → initial state
* Fulfilled → `resolve()` called
* Rejected → `reject()` called

```js
new Promise((resolve, reject) => {
   // async code
})
```

---

# 2. Basic Promise Example

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task completed");
    }, 1000);
});

promise.then((data) => {
    console.log(data);
});
```

---

# 3. resolve()

`resolve()` sends data to `.then()`

```js
resolve({name:"Lavish"})

.then((data) => {
    console.log(data)
})
```

---

# 4. reject()

`reject()` sends error to `.catch()`

```js
reject("Something went wrong")

.catch((error) => {
    console.log(error)
})
```

---

# 5. Promise Chaining

```js
promise
.then((user) => {
    return user.name
})
.then((name) => {
    console.log(name)
})
```

Each `.then()` returns a new promise.

---

# 6. .catch()

Used for handling errors.

```js
promise
.then(...)
.catch((error)=>{
    console.log(error)
})
```

---

# 7. .finally()

Runs always (resolve or reject)

```js
promise.finally(()=>{
    console.log("Always runs")
})
```

---

# 8. Callback Hell (Problem)

```js
setTimeout(()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            console.log("Nested")
        },1000)
    },1000)
},1000)
```

Promises solve this.

---

# 9. Async / Await

Async makes function return promise automatically.

```js
async function test(){
    return "hello"
}
```

Await waits for promise to resolve.

```js
async function getData(){
    const response = await fetch(url)
}
```

---

# 10. Async Await with Try Catch

```js
async function getData(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
```

---

# 11. Promise vs Async Await

### .then() style

```js
fetch(url)
.then(res => res.json())
.then(data => console.log(data))
```

### async/await style

```js
const res = await fetch(url)
const data = await res.json()
```

---

# 12. Promise.all()

Runs multiple promises in parallel

```js
Promise.all([p1, p2, p3])
.then((results)=>{
    console.log(results)
})
```

Fails if any promise fails.

---

# 13. Promise.race()

Returns first completed promise

```js
Promise.race([p1, p2])
```

---

# 14. Promise.allSettled()

Returns all results (success + fail)

```js
Promise.allSettled([p1,p2])
```

---

# 15. Promise.any()

Returns first fulfilled promise

```js
Promise.any([p1,p2])
```

---

# 16. Fetch API

```js
fetch(url)
.then(response => response.json())
.then(data => console.log(data))
```

---

# 17. Important Interview Points

* Promise is asynchronous
* `.then()` runs after resolve
* `.catch()` handles reject
* async always returns promise
* await works only inside async
* try/catch used in async-await
* finally always runs
* promise chaining possible
* fetch returns promise

---

# 18. Execution Order Example

```js
console.log("start")

setTimeout(()=>{
 console.log("timeout")
},0)

Promise.resolve().then(()=>{
 console.log("promise")
})

console.log("end")
```

### Output

```
start
end
promise
timeout
```

---

# 19. Best Practices

* Always use try/catch with async await
* Avoid callback hell
* Use finally for cleanup
* Return values in `.then()`
* Use `Promise.all` for parallel tasks

---

# 20. Memory Trick

```
Promise = "I will do later"
resolve = "done"
reject = "failed"
then = "after done"
catch = "after failed"
finally = "always"
async = "promise function"
await = "wait here"
```

---

# END
