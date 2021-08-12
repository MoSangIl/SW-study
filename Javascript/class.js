"use strict";
// Object-oriented programming
// class: template
// object: instantce of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0){
    //     throw Error("age Can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
    // 이런식으로 age 의 이름을 다르게 줌으로써 set 함수 재귀 호출을 막는다.
    // this.age = value; 는 set 함수를 호출하게 됨!
  }
}

const user1 = new User("Steve", "Job", -1);

// 3. Fields (public, private)
// 너무 최근 too soon!
//
class Experiment {
  publicField = 2;
  #privateField = 0; // private
}

// 4. Static properties and methods
// too soon
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheriting
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawling ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("triangle");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instnaceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

// reference!
// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVE3RDJoZElfUVpWbFlxZ0JlS3lrSTFxU3k4QXxBQ3Jtc0ttMWJyYk81ZUpjYUZHV3J5STJDc0I4QnRxRFZ1cXZqLUlld0gxZE9uS2RySTU3b2t4bkhRR28tcTd4cWJNaklTNHJTcjJXblVRNXJTelRHUWpIM0tIUHFnYnpNdGdGb1JBUnhPVXBYWWFxQXBOUmhuQQ&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference
