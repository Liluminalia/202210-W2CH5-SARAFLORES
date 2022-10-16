export const centerFalse = () => {
    if (i > 0 && j > 0) {
        if (i < array[i].length - 1 && j < array[j].length - 1) {
            if (array[i][j - 1] === true) {
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
                arrayResult[i][j] = true;
            }
            if (count < 3) {
                arrayResult[i][j] = false;
            }
        }
    }
};
export const centerTrue = () => {
    if (i > 0 && j > 0) {
        if (i < array[i].length - 1 && j < array[j].length - 1) {
            if (array[i][j - 1] === true) {
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
            if (count > 3) {
                arrayResult[i][j] = false;
            }
            if (count < 2) {
                arrayResult[i][j] = false;
            }
            if (count === 2 || count === 3) {
                arrayResult[i][j] = true;
            }
        }
    }
};
