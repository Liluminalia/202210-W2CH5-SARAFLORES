export const upLeftFalse = () => {
    if (i === 0 && j === 0) {
        if (array[i][j + 1] === true) {
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
};
export const upLeftTrue = () => {
    if (i === 0 && j === 0) {
        if (array[i][j + 1] === true) {
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
};
export const upRightFalse = () => {
    if (i === 0 && j === array[j].length - 1) {
        if (array[i][j - 1] === true) {
            count += 1;
        }
        if (array[i + 1][j - 1] === true) {
            count += 1;
        }
        if (array[i + 1][j] === true) {
            count += 1;
        }
        if (count >= 3) {
            arrayResult[i][j] = true;
        }
        if (count < 3) {
            arrayResult[i][j] = false;
        }
    }
};
export const upRightTrue = () => {
    if (i === 0 && j === array[j].length) {
        if (array[i][j - 1] === true) {
            count += 1;
        }

        if (array[i + 1][j - 1] === true) {
            count += 1;
        }
        if (array[i + 1][j] === true) {
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
};
export const downLeftFalse = () => {
    if (i === array[i].length) {
        if (j === 0) {
            if (array[i][j + 1] === true) {
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
export const downLeftTrue = () => {
    if (i === array[i].length && j === 0) {
        if (array[i][j + 1] === true) {
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
};
export const downRightFalse = () => {
    if (i === array[i].length && j === array[j].length) {
        if (array[i][j - 1] === true) {
            count += 1;
        }
        debugger;
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
};
export const downRightTrue = () => {
    if (i === array[i].length && j === array[j].length) {
        if (array[i][j - 1] === true) {
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
};
