function sumValuesNumbers(number1: number, number2: number): number {
  return number1 + number2;
};

console.log(sumValuesNumbers(1, 3));

function printValuesNumbers(number1: number, number2: number): void {
  console.log(number1 + number2);
};

function sumValuesNumbers2(number1: number, number2: number, callback: (number: number) => number): number {
  let result = number1 + number2;
  return callback(result);
};

function squared(number: number) {
  return number * number;
};

function divideByHimself(number: number): number {
  return number / number;
};

console.log(sumValuesNumbers2(1, 3, squared));
console.log(sumValuesNumbers2(1, 3, divideByHimself));