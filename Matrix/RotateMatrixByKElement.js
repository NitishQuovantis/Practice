function createDeepCopy(input) {
  const stringfy = JSON.stringify(input);
  return JSON.parse(stringfy);
}

function transpose(input) {
  const row = input.length;
  const column = input[0].length;

  const arr = Array.from({ length: column }, () => []);

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      arr[j][i] = input[i][j];
    }
  }

  return arr;
}

function reverse(input) {
  input.reverse();
  return input;
}

function Rotate90deg(input) {
  if (input === null) {
    return [];
  }

  if (!input.length) {
    return [];
  }

  const transposeMatrix = transpose(input);
  const reverseMatrix = reverse(transposeMatrix);

  return reverseMatrix;
}

function SpiralMatrix(input) {
  let spiralLinearArray = [];
  let inputCopy = input;

  while (inputCopy.length > 0) {
    const [firstRow, ...rest] = inputCopy;
    console.log(inputCopy);

    spiralLinearArray = spiralLinearArray.concat(firstRow);

    if (rest != null && rest.length) {
      inputCopy = Rotate90deg(rest);
    } else {
      break;
    }
  }

  return spiralLinearArray;
}

function rotateArrayByN(input, N) {
  let finalArray = [];
  const firstPartOfArray = input.slice(0, N);
  const secondPartOfArray = input.slice(N);

  finalArray = [...firstPartOfArray.reverse(), ...secondPartOfArray.reverse()];
  return finalArray.reverse();
}

function convertSpiralArrayToMatrix(spiralArray, row, column) {
  let k = 0,
    i = 0,
    j = 0;
  const finalMatrix = [];

  for (i = 0; i < row; ++i) {
    finalMatrix.push([]);

    for (j = 0; j < column; ++j) {
      console.log(i, j, spiralArray[k]);
      finalMatrix[i][j] = spiralArray[k];
      ++k;
    }
  }

  return finalMatrix;
}

function RotateMatrix(input, N) {
  const deepCopyOfArray = createDeepCopy(input);

  const spiralArray = SpiralMatrix(deepCopyOfArray);

  const finalRotated = rotateArrayByN(spiralArray, N);
  const finalMatrix = convertSpiralArrayToMatrix(
    finalRotated,
    input.length,
    input[0].length
  );
  console.log('Rotated Array', finalMatrix);
}

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// console.log(SpiralMatrix(input));
RotateMatrix(input, 0);
