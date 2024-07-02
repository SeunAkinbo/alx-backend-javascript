// updateStudentGradeByCity.js
function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }
  
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeRecord = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A'
      };
    });
}

module.exports = updateStudentGradeByCity;
