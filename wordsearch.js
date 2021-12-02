const transpose = function (matrix) {
  let resultingArray = [];
  const nrOfRows = matrix[0].length;
  const nrOfColumns = matrix.length;

  for (let i = 0; i < nrOfRows; i++) {
    let row = [];
    for (let j = 0; j < nrOfColumns; j++) {
      row.push(matrix[j][i]);
    }
    resultingArray.push(row);
  }
  return resultingArray;
};

const wordSearch = function (letters, word) {
  let newletters = [];
  let newTransposedLetters = [];
  for (i = 0; i < letters.length; i++) {
    newletters.push(letters[i].join(""));
  }

  for (newletter of newletters) {
    if (newletter === word) {
      return true;
    }
  }

  letters = transpose(letters);
  for (i = 0; i < letters.length; i++) {
    newTransposedLetters.push(letters[i].join(""));
  }

  for (newTransposedLetter of newTransposedLetters) {
    if (newTransposedLetter === word) {
      return true;
    }
  }

  return false
};



module.exports = wordSearch;
