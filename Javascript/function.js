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
