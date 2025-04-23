const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const dobro = [];

// for (let i = 0; i < nums.length; i++) {
//   dobro.push(nums[i] * 2);
// }

for (let num of nums) {
  dobro.push(num * 2);
}

console.log(dobro);
