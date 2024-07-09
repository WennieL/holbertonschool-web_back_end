export default function appendToEachArrayValue(array, appendString) {
  const newAarray = [];
  for (const idx of array) {
    const value = array[idx];
    newAarray.push(appendString + value);
  }

  return newAarray;
}
