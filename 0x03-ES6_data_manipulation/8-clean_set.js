export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const res = [];
  for (const el of set) {
    if (el.startsWith(startString)) {
      res.push(el.slice(startString.length, el.length));
    }
  }
  return res.join('-');
}
