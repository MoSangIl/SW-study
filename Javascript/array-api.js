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
  const fruits = "๐, ๐ฅ, ๐, ๐";
  console.log(fruits.split());

  // answer
  const result = fruits.split(","); // Seperator๋ฅผ ํ์์ ์ผ๋ก ์ ๋ฌ! ์๋ต์ ์์ ํ๋๋ก ๋ฌถ์
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.sort((a, b) => b - a));

  // answer
  const result = array.reverse();
  console.log(result);
  console.log(array); // array๋ ๊ฐ์ด ๋ณํ๋จ
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.splice(2));

  // answer
  const result = array.splice(0, 2); // ์ญ์ ๋ ์์๋ฅผ ๋ฐํํ๋ค.
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
  // find ๋ return ์ด true๊ฐ ๋๋ฉด ํด๋น ๋ฐฐ์ด ์์๋ฅผ ๋ฐํํ๊ณ  ์ข๋ฃ๋๋ค.
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
  const result = students.reduce((prev, curr) => prev + curr.score, 0); // ์์ ๊ฐ์ ์ ํ  ์ ์๊ณ , return๊ฐ์ ๋ค์ ๋ฐ๋ณต์ prev์ ๋์๋๋ค.
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  console.log(students.map((student) => student.score).toString());

  // answer
  const result = students.map((student) => student.score).join();
  console.log(result);

  // filtering ์ ์ถ๊ฐํด์ ์กฐ๊ฑด์ ๋ง๋ ๊ฐ๋ง ์ถ๋ ฅ ๊ฐ๋ฅ
  // 50 ์  ์ด์๋ง ์ถ๋ ฅ
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

  // ์์ ๊ฐ์ด ์์ฑํ๋ ๋ฐฉ์์ ํจ์ํ ํ๋ก๊ทธ๋๋ฐ์ด๋ผ๊ณ  ํจ
  // ๊ฐ๋์ฑ ์ข๋ค!
}
//   array-api.js
//   Displaying array-api.js.
