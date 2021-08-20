// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.toString());

  // answer
  const result = fruits.join(",");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  console.log(fruits.split());

  // answer
  const result = fruits.split(","); // Seperator를 필수적으로 전달! 생략시 원소 하나로 묶음
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.sort((a, b) => b - a));

  // answer
  const result = array.reverse();
  console.log(result);
  console.log(array); // array도 같이 변형됨
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.splice(2));

  // answer
  const result = array.splice(0, 2); // 삭제된 원소를 반환한다.
  console.log(result); // 1, 2
  console.log(array); // 3, 4, 5

  const realResult = array.slice(2, 5); // exclude end index
  console.log(realResult); // 3, 4, 5
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  students.forEach((student) => {
    if (student.score === 90) console.log(student);
  });

  // answer
  const result = students.find((student) => student.score === 90);
  console.log(result);
  // find 는 return 이 true가 되면 해당 배열 요소를 반환하고 종료된다.
}

// Q6. make an array of enrolled students
{
  console.log(students.filter((student) => student.enrolled));

  // answer
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  console.log(students.map((student) => student.score));

  // answer
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.log(students.some((student) => student.score < 50));

  // answer
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  console.log(
    students.map((student) => student.score).reduce((a, b) => a + b) /
      students.length
  );
  const n = [1, 2, 3, 4, 5];
  console.log(n.reduce((a, b) => a + b));

  // answer
  const result = students.reduce((prev, curr) => prev + curr.score, 0); // 시작 값을 정할 수 있고, return값은 다음 반복의 prev에 대입된다.
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  console.log(students.map((student) => student.score).toString());

  // answer
  const result = students.map((student) => student.score).join();
  console.log(result);

  // filtering 을 추가해서 조건에 맞는 값만 출력 가능
  // 50 점 이상만 출력
  const result2 = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join();
  console.log(result2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  console.log(
    students
      .map((student) => student.score)
      .sort()
      .toString()
  );

  // answer
  const result = students
    .map((student) => student.score)
    .sort()
    .join();
  console.log(result);

  // 위와 같이 작성하는 방식을 함수형 프로그래밍이라고 함
  // 가독성 좋다!
}
//   array-api.js
//   Displaying array-api.js.
