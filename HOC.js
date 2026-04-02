const arr = [1, 2, 3, 4, 5, 6, 7];
for (const num of arr) {
  //   console.log(num);
}

//maps

const map = new Map();
map.set("name", "lavish");
map.set("name1", "lavish1");
map.set("name2", "lavish2");
map.set("name3", "lavish3");
map.set("name3", "lavish3"); // only unique values can be inserted in the map

// console.log(map);
for (const [key, value] of map) {
  //   console.log(key, "->", value);
}

// for(const value in map){
//     console.log(value);    // for in  will not work here bcz map iterable ni hota
// }
//in case of the objects of will not work like map.
// will work like this

const myObject = {
  name: "lavish",
  class: "BCA",
};

for (const key in myObject) {
  //   console.log(`${key} -> ${myObject[key]}`);
}

//for each

const arr1 = [1, 2, 3, 4, 5];

arr1.forEach(function (item) {
  //   console.log(item);
});

//arrrow function
arr1.forEach((item) => {
  console.log(item);
});
