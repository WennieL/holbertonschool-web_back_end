export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentCity = students.filter((student) => student.location === city);
  const studentGrade = studentCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });

  return studentGrade;
}
