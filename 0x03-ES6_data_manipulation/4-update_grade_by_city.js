export default function updateStudentGradeByCity(arr, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  return arr
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
}
