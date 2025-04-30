function somar(a, b, c, d) {
  return a + b + c + d;
}

let x;
console.log(x);

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3)); // d = undefined
console.log(somar(1, 2)); // c, d = undefined
console.log(somar(1)); // b, c, d = undefined
console.log(somar()); // a, b, c, d = undefined
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
