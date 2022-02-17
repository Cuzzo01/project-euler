const UpperBound = 4000000;

let i = 1;
let lastNumber = 1;
let sum = 0;
while (i < UpperBound) {
  if (i % 2 === 0) sum += i;
  const newNumber = lastNumber + i;
  lastNumber = i;
  i = newNumber;
}

console.log(sum);
