export default function returnHowManyArguments(...input) {
  let sum = 0;
  for (let i of input) {
    sum += 1;
  }
  return sum;
}

//  or simply return arguments.length;
