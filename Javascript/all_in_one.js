// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
"use strict";

//2. Variable
// let (added in ES6)
let globalName = "global name";
{
  let name = "sangil";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
// console.log(name); // 나오지 않는다. block Scope
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numericvalues: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over(-2**53) ~ 2**53;
console.log(`value: ${bigInt} type: ${typeof bigInt}`);
console.log(Number.MAX_SAFE_INTEGER);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for("id"); // id string 에 대한 symbol 오브젝트를 반환
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-lif object, data structure
const sangil = { name: "sangil", age: 20 };
sangil.age = 21;
console.log(sangil.age);

// 5. Dynamic typing: dynamically typed langauge
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; // '75'
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);

// run-time 시에 변수의 type을 정해주는 것!
// text.charAt() 과 같이 특정 타입에 적용되는 함수를 사용할 때 위험할 수 있는 것이다!

// ###################### OPERATOR ############################################
// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
// PostIncrement , PreDecrement, PostDcrement

// 4. Assignment operators
let x = 3;
let y = 5;
x += y;

//5. comparison operators
// <, > <=, >=

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// || &&  각 연산은 맨 앞에서 끝날 수도 있는 경우를 가지므로, 간단한 연산을 먼저 배치해야 좋은 코드이다!

// often used to compress long if-statement
// nullableObject && nullableObject.something -> 먼저 object가 유효한지 검사할 수 있다.
if (nullableObject != null) {
  nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("pass");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
// 타입 상관 없이, 값이 같으면 true를 반환
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 값이 같아도, 타입이 다르면 false! 엄격하게 비교함!
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const sangil1 = { name: "sangil" };
const sangil2 = { name: "sangil" };
const sangil3 = sangil1;
console.log(sangil1 == sangil2); // false -> ref 값이 다르기 때문에!
console.log(sangil1 === sangil2); // false -> ref가 다름
console.log(sangil1 === sangil3); // true -> ref가 같다!!

// equality - puzzle
console.log(0 == false); // 0 은 false로 간주 가능, -> true
console.log(0 === false); // 타입이 다름, false
console.log("" == false); // ''는 false로 간주 -> true
console.log("" === false); // 타입이 다름 , false
console.log(null == undefined); // true
console.log(null === undefined); // 다른 타입 false

// 8. Conditional operators: if
// if, else if, else
const name = "df";
if (name === "ellie") {
  console.log("Welcome, Ellie");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no"); // 간단할 때만 사용하자.

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you");
    break;
  default:
    console.log("some all!");
    break;
}

// 11. lLoops
// while loop. while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
  console.log(`do while: ${i}`);
} while (i > 0);

// for loop, for(begin; condition; stop)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i + 1);
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
i = 0;
while (i <= 8) {
  console.log(i++);
}

// ###################### FUNCTION ############################################

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body ... return; }
// one function === one thing : 하나의 함수는 하나의 역할을 수행하도록!
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
// -> object로써, function에 대한 property가 있고 사용할 수 있다.

function printHello() {
  console.log("hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeNAme(obj) {
  obj.name = "coder";
}
const eliie = { name: "ellie" };
changeNAme(ellie); // object는 reference를 넘기기 때문에 값이 바뀐다.
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknow") {
  console.log(`message: ${message}, from: ${from}`);
}
showMessage("HI");

// 4. Reset Parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll("dream", "coding", "sangil");

// 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variabel
  console.log(message);
  console.log(globalMessage);
  function printAnoter() {
    console.log(message);
    let childMessage = "hello";
  }
}

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
    // 가독성이 좋지 않아..
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upfrade logic
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNMo = function print() {
  console.log("no");
  // print(); recursive
};
randomQuiz("wrong", printYes, printNMo);
randomQuiz("love you", printYes, printNMo);

// Arrow Function
// always anonymous
// const simplePrint = function() {
//     console.log('SimplePrint');
// }

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const scope = (s, a) => {
  // do something more
  return;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Fun quiz time
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  let com = command.charAt(0);
  switch (com) {
    case "a":
      return a + b;
    case "s":
      return a - b;
    case "d":
      return b === 0 ? "error!" : a / b;
    case "m":
      return a * b;
    case "r":
      return b === 0 ? "error!" : a % b;
    default:
      console.log("any other command");
      break;
  }
}
