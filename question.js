const data = require('./students.json')
// console.log(typeof data)

// Code of first question
const bestThreeStudents = data.reduce((acc, student) => {
  const totalMarks = student.marks.reduce((acc, mark) => {
    if (mark.marks > 33) {
      return acc + mark.marks
    }
    return acc
  }, 0)
  return [...acc, { ...student, totalMarks }]
}, [])

const sortedStudents = bestThreeStudents.sort(
  (a, b) => b.totalMarks - a.totalMarks
)

// const topThreeStudents = sortedStudents.slice(0, 3)
// console.log(topThreeStudents)

const topThreeStudents = sortedStudents.reduce((acc, student) => {
  if (acc.length < 3) {
    return [...acc, student]
  }
  return acc
}, [])
console.log(topThreeStudents)

// check results
function checkResult(result) {
  if (result > 33) {
    return 'Pass'
  }
  return 'Fail'
}

// Code of second question
const getResultOfClass = sortedStudents.reduce((count, student) => {
  console.log(
    student.name.first +
      ' ' +
      student.name.last +
      ' ' +
      'obtained' +
      ' ' +
      student.totalMarks +
      ' ' +
      'marks' +
      ' ' +
      '[' +
      'English' +
      ' ' +
      '(' +
      student.marks[0].marks +
      ')' +
      ' ' +
      checkResult(student.marks[0].marks) +
      ',' +
      ' ' +
      'Maths' +
      ' ' +
      '(' +
      student.marks[1].marks +
      ')' +
      ' ' +
      checkResult(student.marks[1].marks) +
      ',' +
      ' ' +
      'Physics' +
      ' ' +
      '(' +
      student.marks[2].marks +
      ')' +
      ' ' +
      checkResult(student.marks[2].marks) +
      ',' +
      ' ' +
      'Chemistry' +
      ' ' +
      '(' +
      student.marks[3].marks +
      ')' +
      ' ' +
      checkResult(student.marks[3].marks) +
      ']' +
      ' ' +
      'got' +
      ' ' +
      count +
      'st' +
      ' ' +
      'Position'
  )
  return (count += 1)
}, 1)
