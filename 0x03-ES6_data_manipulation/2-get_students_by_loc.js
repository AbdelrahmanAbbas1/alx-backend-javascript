export default function getStudentsByLocation(arr, city) {
  const res = arr.filter((obj) => obj.location === city);
  return res;
}
