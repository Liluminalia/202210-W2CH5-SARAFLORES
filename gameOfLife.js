let array = [
    [false, false, false, false],
    [false, true, false, false],
    [false, true, false, false],
    [false, true, false, false],
    [false, false, false, false],
];
let arrayResult = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
];

const gameOfLife = () => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === false) {
                let count = 0;
                // esquina arriba izquierda
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
                // esquina abajo izquierda
                if (i === array.length - 1 && j === 0) {
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
                // esquina arriba derecha
                if (i === 0 && j === array[i].length - 1) {
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
                // esquina abajo derecha
                if (i === array.length - 1 && j === array[i].length - 1) {
                    if (array[i][j - 1] === true) {
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
                // fila arriba
                if (i === 0 && j > 0) {
                    if (j < array[i].length - 1) {
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
                // columna derecha
                if (i > 0 && j === array[i].length - 1) {
                    if (i < array.length - 1) {
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
                // fila abajo
                if (i === array.length - 1 && j > 0) {
                    if (j < array[i].length - 1) {
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
                // columna izquierda
                if (i > 0 && j === 0) {
                    if (i < array.length - 1) {
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
                // centro
                if (i > 0 && j > 0) {
                    if (i < array.length - 1 && j < array[i].length - 1) {
                        if (array[i][j - 1] === true) {
                            count += 1;
                        }
                        debugger;
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
            }
            if (array[i][j] === true) {
                let count = 0;
                // esquina arriba izquierda
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
                // esquina abajo izquierda
                if (i === array.length - 1 && j === 0) {
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
                // esquina arriba derecha
                if (i === 0 && j === array[i].length - 1) {
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
                // esquina abajo derecha
                if (i === array.length - 1 && j === array[i].length - 1) {
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
                // fila arriba
                if (i === 0 && j > 0) {
                    if (j < array[i].length - 1) {
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
                // columna derecha
                if (i > 0 && j === array[i].length - 1) {
                    if (i < array.length) {
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
                // fila abajo
                if (i === array.length - 1 && j > 0) {
                    if (j < array[i].length - 1) {
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
                // columna izquierda
                if (i > 0 && j === 0) {
                    if (i < array.length) {
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
                // centro
                if (i > 0 && j > 0) {
                    if (i < array.length - 1 && j < array[i].length - 1) {
                        if (array[i][j - 1] === true) {
                            count += 1;
                        }
                        debugger;
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
            }
        }
    }
    array = arrayResult;

    return array;
};

const repeating = setInterval(gameOfLife, 1000);
