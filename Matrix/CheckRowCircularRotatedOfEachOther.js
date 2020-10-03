/**
 * Problem statement : https://www.geeksforgeeks.org/check-rows-matrix-circular-rotations/
 * 
 Input: mat[][] = 1, 2, 3
                 3, 1, 2
                 2, 3, 1
Output:  Yes
All rows are rotated permutation
of each other.

Input: mat[3][3] = 1, 2, 3
                   3, 2, 1
                   1, 3, 2
Output:  No
Explanation : As 3, 2, 1 is not a rotated or 
circular permutation of 1, 2, 3

 * 
 */

function checkRotated(input) {
  const firstRow = input[0];
  const str = [...firstRow, ...firstRow].join();

  const rows = input.length;
  let isRotated = true;

  for (let i = 1; i < rows; ++i) {
    const row = input[i];
    const s = row.join();

    if (str.indexOf(s) === -1) {
      isRotated = false;
      break;
    }
  }

  return isRotated;
}

const input = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 1, 2],
];

console.log(checkRotated(input));
