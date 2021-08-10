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
