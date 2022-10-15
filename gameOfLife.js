let array = [
  [false, false, false, false],
  [false, true, true, false],
  [true, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

for (i = 0; i < array.length; i++) {
  for (j = 0; j < array[j].length; j++) {
    debugger;
    if (
      (array[i - 1] != undefined) {
      if (array[i][j] === false) {
        let count = 0;

        if (array[i][j - 1] === true) {
          count += 1;
        }
        if (array[i][j] === true) {
          count += 1;
        }
        if (array[i][j + 1] === true) {
          count += 1;
        }
        if (array[i + 1][j - 1] === true) {
          count += 1;
        }
        if (array[i + 1][j] === true) {
          count += 1;
        }
        if (array[i + 1][j + 1] === true) {
          count += 1;
        }
        if (array[i - 1][j - 1] === true) {
          count += 1;
        }
        if (array[i - 1][j] === true) {
          count += 1;
        }
        if (array[i - 1][j + 1] === true) {
          count += 1;
        }
        if (count >= 3) {
          array[i][j] = true;
          count = 0;
        }
      }
    }
    if (array[j - 1]!= undefined){
        if (array[i][j] === false) {
        let count = 0;

        if (array[i][j - 1] === true) {
          count += 1;
        }
        if (array[i][j] === true) {
          count += 1;
        }
        if (array[i][j + 1] === true) {
          count += 1;
        }
        if (array[i + 1][j - 1] === true) {
          count += 1;
        }
        if (array[i + 1][j] === true) {
          count += 1;
        }
        if (array[i + 1][j + 1] === true) {
          count += 1;
        }
        if (array[i - 1][j - 1] === true) {
          count += 1;
        }
        if (array[i - 1][j] === true) {
          count += 1;
        }
        if (array[i - 1][j + 1] === true) {
          count += 1;
        }
        if (count >= 3) {
          array[i][j] = true;
          count = 0;
        }
      }
    }
    if (array[i + 1]!= undefined){
        if (array[i][j] === false) {
        let count = 0;

        if (array[i][j - 1] === true) {
          count += 1;
        }
        if (array[i][j] === true) {
          count += 1;
        }
        if (array[i][j + 1] === true) {
          count += 1;
        }
        if (array[i + 1][j - 1] === true) {
          count += 1;
        }
        if (array[i + 1][j] === true) {
          count += 1;
        }
        if (array[i + 1][j + 1] === true) {
          count += 1;
        }
        if (array[i - 1][j - 1] === true) {
          count += 1;
        }
        if (array[i - 1][j] === true) {
          count += 1;
        }
        if (array[i - 1][j + 1] === true) {
          count += 1;
        }
        if (count >= 3) {
          array[i][j] = true;
          count = 0;
        }
      }
    }
    if (array[j + 1]!=undefined){
        if (array[i][j] === false) {
        let count = 0;

        if (array[i][j - 1] === true) {
          count += 1;
        }
        if (array[i][j] === true) {
          count += 1;
        }
        if (array[i][j + 1] === true) {
          count += 1;
        }
        if (array[i + 1][j - 1] === true) {
          count += 1;
        }
        if (array[i + 1][j] === true) {
          count += 1;
        }
        if (array[i + 1][j + 1] === true) {
          count += 1;
        }
        if (array[i - 1][j - 1] === true) {
          count += 1;
        }
        if (array[i - 1][j] === true) {
          count += 1;
        }
        if (array[i - 1][j + 1] === true) {
          count += 1;
        }
        if (count >= 3) {
          array[i][j] = true;
          count = 0;
        }
      }
    }
  }
}
