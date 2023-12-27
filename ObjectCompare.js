let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let key1 = Object.keys(obj1).sort();
let key2 = Object.keys(obj2).sort();
console.log(JSON.stringify(key1) === JSON.stringify(key2));
