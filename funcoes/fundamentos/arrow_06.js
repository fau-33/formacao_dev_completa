// const somar = (a) => {
//   return (b) => {
//     return (c) => a + b + c;
//   };
// };

// const somar = (a) => {
//   return (b) => (c) => a + b + c;
// };

const somar = (a) => (b) => (c) => a + b + c;

console.log(somar(1)(2)(3));
