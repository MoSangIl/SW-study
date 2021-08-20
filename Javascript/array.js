"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // last index of array

// 3. Looping over an array
// print all fruits
// a. for loob
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("strawberry", "peach");

// pop: remove an item from the end
fruits.pop();
fruits.pop();

// unshift: add an item to the begining
fruits.unshift("strawberry", "lemon");

// shift: remove an item from the begining
fruits.shift();
fruits.shift();

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push("strawberry", "peach", "lemon");
console.log(fruits); // apple, banana, "strawberry", "peach", "lemon"
fruits.splice(1); // 개수를 지정하지 않으면, 시작 index부터 끝까지 다 지워버림
console.log(fruits); // apple

fruits.push("strawberry", "peach", "lemon");
fruits.splice(1, 1, "fruit1", "fruit2"); // 지정 인덱스를 지우고, 추가 요소를 삽입한다.
// fruits.splic(1, 0, '') -> 지우지 않고 삽입
console.log(fruits); // apple, 'fruit1', 'fruit2' "peach", "lemon"

// combine two arrays
const fruits2 = ["f1", "f2"];
const newfruits = fruits.concat(fruits2); // 합쳐버림

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple")); // 0
console.log(fruits.indexOf("asdf")); // -1

//includes
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("asdf")); // false

// lastIndexOf
fruits.push("apple");
console.log(fruits.lastIndexOf("apple")); // 같은 요소 중 마지막 인덱스

console.clear();
console.log(fruits);
console.log(fruits.toLocaleString());
console.log(fruits.toString());
console.log(fruits.join("|"));
console.log(fruits.every((fruit) => fruit.length < 10));
