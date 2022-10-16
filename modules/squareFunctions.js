export const topTrue = () => {
    if (i === 0 && j > 0) {
        if (j < array[j].length) {
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
export const topFalse = () => {
    if (i === 0 && j > 0) {
        if (j < array[j].length - 1) {
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
            if (count >= 3) {
                arrayResult[i][j] = true;
            }
            if (count < 3) {
                arrayResult[i][j] = false;
            }
        }
    }
};
export const rightTrue = () => {
    if (i > 0 && j === array[j].length) {
        if (i < array[i].length) {
            if (array[i][j - 1] === true) {
                count += 1;
            }
            debugger;
            if (array[i + 1][j - 1] === true) {
                count += 1;
            }
            if (array[i + 1][j] === true) {
                count += 1;
            }
            if (array[i - 1][j - 1] === true) {
                count += 1;
            }
            if (array[i - 1][j] === true) {
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
export const rightFalse = () => {
    if (i > 0 && j === array[j].length - 1) {
        if (i < array[i].length) {
            if (array[i][j - 1] === true) {
                count += 1;
            }
            if (array[i + 1][j - 1] === true) {
                count += 1;
            }
            if (array[i + 1][j] === true) {
                count += 1;
            }
            if (array[i - 1][j - 1] === true) {
                count += 1;
            }
            if (array[i - 1][j] === true) {
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
export const downTrue = () => {
    if (i === array[i].length && j > 0) {
        if (j < array[j].length - 1) {
            if (array[i][j - 1] === true) {
                count += 1;
            }
            if (array[i][j + 1] === true) {
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
export const downFalse = () => {
    if (i === array[i].length && j > 0) {
        if (j < array[j].length) {
            if (array[i][j - 1] === true) {
                count += 1;
            }
            if (array[i][j + 1] === true) {
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
export const leftTrue = () => {
    if (i > 0 && j === 0) {
        if (i < array[i].length - 1) {
            if (array[i][j + 1] === true) {
                count += 1;
            }
            if (array[i + 1][j] === true) {
                count += 1;
            }
            if (array[i + 1][j + 1] === true) {
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
export const leftFalse = () => {
    if (i > 0 && j === 0) {
        if (i < array[i].length - 1) {
            if (array[i][j + 1] === true) {
                count += 1;
            }
            if (array[i + 1][j] === true) {
                count += 1;
            }
            if (array[i + 1][j + 1] === true) {
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
