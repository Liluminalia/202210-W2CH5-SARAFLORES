let array = [
    [false, false, false, false],
    [false, true, true, false],
    [true, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[j].length; j++) {
        debugger;

        if (array[i][j] === false) {
            let count = 0;
            // esquina arriba izquierda
            if (i === 0 && j === 0) {
                if (array[i][j] === true) {
                    count += 1;
                }
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
                    array[i][j] = true;
                    count = 0;
                }
            }
            // esquina abajo izquierda
            if (i === array[i].length - 1 && j === 0) {
                if (array[i][j] === true) {
                    count += 1;
                }
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
                    array[i][j] = true;
                    count = 0;
                }
            }
            // esquina arriba derecha
            if (i === 0 && j === array[j].length - 1) {
                if (array[i][j - 1] === true) {
                    count += 1;
                }
                if (array[i][j] === true) {
                    count += 1;
                }
                if (array[i + 1][j - 1] === true) {
                    count += 1;
                }
                if (array[i + 1][j] === true) {
                    count += 1;
                }
                if (count >= 3) {
                    array[i][j] = true;
                    count = 0;
                }
            }
            // esquina abajo derecha
            if (i === array[i].length - 1 && j === array[j].length - 1) {
                if (array[i][j - 1] === true) {
                    count += 1;
                }
                if (array[i][j] === true) {
                    count += 1;
                }
                if (array[i - 1][j - 1] === true) {
                    count += 1;
                }
                if (array[i - 1][j] === true) {
                    count += 1;
                }
                if (count >= 3) {
                    array[i][j] = true;
                    count = 0;
                }
            }
            // fila arriba
            if (i === 0 && j > 0) {
                if (j < array[j].length) {
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
                    if (count >= 3) {
                        array[i][j] = true;
                        count = 0;
                    }
                }
            }
            // columna derecha
            if (i > 0 && j === array[j].length - 1) {
                if (i < array[i].length) {
                    if (array[i][j - 1] === true) {
                        count += 1;
                    }
                    if (array[i][j] === true) {
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
                        array[i][j] = true;
                        count = 0;
                    }
                }
            }
            // fila abajo
            if (i === array[i].length - 1 && j > 0) {
                if (j < array[j].length) {
                    if (array[i][j - 1] === true) {
                        count += 1;
                    }
                    if (array[i][j] === true) {
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
                        array[i][j] = true;
                        count = 0;
                    }
                }
            }
            // columna izquierda
            if (i > 0 && j === 0) {
                if (i < array[i].length) {
                    if (array[i][j] === true) {
                        count += 1;
                    }
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
                        array[i][j] = true;
                        count = 0;
                    }
                }
            }
            // centro
            if (i > 0 && j > 0) {
                if (i < array[i].length && j < array[j].length) {
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
}