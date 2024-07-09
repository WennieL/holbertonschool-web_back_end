export default function returnHowManyArguments(...input) {
  let sum = 0;
  for (const i of input) {
    if (i) {
      sum += 1;
    }
  }
  return sum;
}

//  or simply return arguments.length;
