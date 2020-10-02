// https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/
// Given a square matrix, turn it by 90 degrees in anti-clockwise direction without
// using any extra space.

// Input:
// Matrix:
//  1  2  3
//  4  5  6
//  7  8  9
// Output:
//  3  6  9
//  2  5  8
//  1  4  7
// The given matrix is rotated by 90 degree
// in anti-clockwise direction.

// Input:
//  1  2  3  4
//  5  6  7  8
//  9 10 11 12
// 13 14 15 16
// Output:
//  4  8 12 16
//  3  7 11 15
//  2  6 10 14
//  1  5  9 13
// The given matrix is rotated by 90 degree
// in anti-clockwise direction.

function RotateMatrix(input, side) {
  for (let i = 0; i <= side / 2 - 1; ++i) {
    for (let j = i; j < side - i - 1; ++j) {
      let curr = input[i][j];

      input[i][j] = input[j][side - i - 1];
      input[j][side - i - 1] = input[side - i - 1][side - j - 1];
      input[side - i - 1][side - j - 1] = input[side - j - 1][i];

      input[side - j - 1][i] = curr;

      console.log(input);
    }

    console.log(input);
  }
}

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

RotateMatrix(input, 4);
console.log(input);
