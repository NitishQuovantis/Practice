// https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/

function transpose(input) {
  for (let i = 0; i < input.length; ++i) {
    for (let j = i; j < input[0].length; ++j) {
      const temp = input[i][j];
      input[i][j] = input[j][i];
      input[j][i] = temp;
    }
  }
}

function reverse(input) {
  input.reverse();
}

function RotateMatrix(input) {
  transpose(input);
  reverse(input);
}

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

RotateMatrix(input);
console.log(input);
