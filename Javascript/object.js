// Objects
// one of the JavaScript's data types
// a collection of related data and / or functionality
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(ellie.name); // 바로 쓸수 있을때!
console.log(ellie["name"]); // key 값을 원하는 값으로 받아오고 싶을떄!
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("ellie", 30);
console.log(person4);
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// 4. constructor Function
const person5 = new Person("ellie", 40);
console.log(person5);
function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator : property existencde check (key in obj)
console.log("name" in ellie); // true
console.log("age" in ellie); // true
console.log("random" in ellie); // false

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3...]])
const user = { name: "ellie", age: 20 };
const user2 = user;
user2.name = "coder";
console.log(user); // name -> coder

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

//
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue -> 같은 속성이 있으면 덮어쓰기를 한다.
console.log(mixed.size); // big
