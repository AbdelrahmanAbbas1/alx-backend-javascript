export default function getStudentIdsSum(arr) {
  const res = arr.reduce((prev, curr) => prev.id || prev + curr.id, 0);
  return res;
}
