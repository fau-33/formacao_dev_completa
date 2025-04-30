const somar = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

// const somar = (a) => {
//   return (b) => (c) => a + b + c;
// };

// const somar = (a) => (b) => (c) => a + b + c;

console.log(somar(11)(22)(33));
