export default function getMatrixValue(str) {
  const arr = str.split(',');
  return Number(arr.at(-2));
}
