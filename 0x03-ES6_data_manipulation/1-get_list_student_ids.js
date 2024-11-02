export default function getListStudnetIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const res = arr.map((obj) => obj.id);
  return res;
}
