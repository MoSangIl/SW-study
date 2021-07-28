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