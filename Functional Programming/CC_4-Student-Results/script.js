// Complete the following program to compute and return the female students results 
// (name and average grade). Refactor it using functional programming. 
// Execution result must stay the same.
const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

const studentResult = students => {
  let newStudents = students.filter(student => student.sex === 'f');
  let grades = newStudents.map(student => student.grades.reduce((acc, grade) => acc + grade, 0));
  newStudents.forEach((student, i) => student.grades = grades[i] / student.grades.length);
  return newStudents;
}

// Course solution
const studentResult = students => {
  const femaleList = student => student.sex === 'f';
  const avgGrade = arr => arr.grades = arr.grades.reduce((a, b) => a + b, 0) / arr.grades.length;
  const filter = (student, func) => student.filter(func);
  const result = filter(filter(students, femaleList), avgGrade);

  return result;
}