// https://www.geeksforgeeks.org/rotate-matrix-180-degree/

function RotateMatrix(input) {
  const length = input.length;
  const columns = input[0].length;
  const halfLength = Math.floor(length / 2);

  for (let i = 0; i < halfLength; ++i) {
    for (let j = 0; j < columns; ++j) {
      const temp = input[i][j];
      input[i][j] = input[length - 1 - i][columns - 1 - j];
      input[length - 1 - i][columns - 1 - j] = temp;
    }
  }

  if (length % 2 !== 0) {
    input[halfLength + 1].reverse();
  }
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const input = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

RotateMatrix(input);
console.log(input);
