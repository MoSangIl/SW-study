// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(["apple", "banana"]);
console.log(json); // ["apple", "banana"]

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  symbol: Symbol("id"), // not included
  jump: () => {
    console.log(`${name} haha`);
  }, // not included
};
json = JSON.stringify(rabbit);
console.log(rabbit); // symbol, function제외 json형식으로 출력

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json); // rabbit에서 name, color 각 키와 value를 json형식으로 출력

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`); // 각 키와 value를 출력
  return key === "name" ? "ellie" : value; // 키가 name 일 경우 value 값을 ellie로 변경
});

// 2. JSON to Object
// parse(json)
json = JSON.parse(rabbit);
const obj = JSON.parse(json, (key, value));
console.log(obj);
rabbit.jump(); // call jump method
obj.jump(); // error

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// http://www.jsondiff.com/ : jSON 비교 사이트
// https://jsonbeautifier.org/ : json 포멧 정력
// https://jsonparser.org/ : JSON 형식 파싱 사이트 (보기 편하게 파싱해줌)
// https://tools.learningcontainer.com/json-validator/ : json을 검사함