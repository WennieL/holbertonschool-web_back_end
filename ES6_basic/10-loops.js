export default function appendToEachArrayValue(array, appendString) {
  const newAarray = [];
  for (const value of array) {
    newAarray.push(appendString + value);
  }

  return newAarray;
}
