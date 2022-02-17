const UpperLimit = 999;

let sum = 0;
for (let i = UpperLimit; i > 0; i--) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
