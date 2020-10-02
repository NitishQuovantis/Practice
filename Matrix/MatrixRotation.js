// https://www.geeksforgeeks.org/rotate-matrix-elements/

// Input
// 1    2    3
// 4    5    6
// 7    8    9

// Output:
// 4    1    2
// 7    5    3
// 8    9    6

// For 4*4 matrix
// Input:
// 1    2    3    4
// 5    6    7    8
// 9    10   11   12
// 13   14   15   16

// Output:
// 5    1    2    3
// 9    10   6    4
// 13   11   7    8
// 14   15   16   12

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function RotateMatrix(input) {
  let row = 0;
  let column = 0;
  let rowEnd = input.length - 1;
  let columnEnd = input[0].length - 1;

  while (row < rowEnd && column < columnEnd) {
    let prev = input[row + 1][column];

    for (let i = column; i <= columnEnd; ++i) {
      let curr = input[row][i];
      input[row][i] = prev;
      prev = curr;
    }
    ++row;

    for (let i = row; i <= rowEnd; ++i) {
      let curr = input[i][columnEnd];
      input[i][columnEnd] = prev;
      prev = curr;
    }
    --columnEnd;

    for (let i = columnEnd; i >= column; --i) {
      let curr = input[rowEnd][i];
      input[rowEnd][i] = prev;
      prev = curr;
    }

    --rowEnd;

    for (let i = rowEnd; i >= row; --i) {
      let curr = input[i][column];
      input[i][column] = prev;
      prev = curr;
    }

    ++column;
  }
}

RotateMatrix(input);
console.log(input);
