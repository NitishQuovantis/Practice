/*
Given a square matrix the task is that we turn it by 180 
degrees in anti-clockwise direction without using any extra space.

Input :  1  2  3
         4  5  6
         7  8  9
Output : 9 8 7 
         6 5 4 
         3 2 1

Input :  1 2 3 4 
         5 6 7 8 
         9 0 1 2 
         3 4 5 6 
Output : 6 5 4 3 
         2 1 0 9 
         8 7 6 5 
         4 3 2 1

*/

function transpose(input) {
  for (let i = 0; i < input.length; ++i) {
    for (let j = i + 1; j < input[0].length; ++j) {
      const temp = input[i][j];
      input[i][j] = input[j][i];
      input[j][i] = temp;
    }
  }
}

function reverseMatrix(input) {
  input.reverse();
}

function RotateMatrix(input) {
  //rotate 90deg
  transpose(input);
  reverseMatrix(input);

  // rotate 90deg (180deg total)
  transpose(input);
  reverseMatrix(input);
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

RotateMatrix(input);
console.log(input);
