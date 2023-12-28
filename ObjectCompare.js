let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let key1 = Object.entries(obj1).sort();
let key2 = Object.entries(obj2).sort();
console.log(JSON.stringify(key1) === JSON.stringify(key2));
