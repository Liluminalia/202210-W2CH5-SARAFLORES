import { centerFalse, centerTrue } from './modules/centerFunctions';
import {
    downLeftFalse,
    upLeftFalse,
    upRightFalse,
    downRightFalse,
    downLeftTrue,
    upRightTrue,
    downRightTrue,
} from './modules/cornerFunctions';
import {
    downTrue,
    leftTrue,
    topFalse,
    topTrue,
    rightTrue,
    rightFalse,
    downFalse,
    leftFalse,
} from './modules/squareFunctions';

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
    for (let i = 0; i < array[i].length; i++) {
        for (let j = 0; j < array[j].length; j++) {
            if (array[i][j] === false) {
                let count = 0;
                // esquina arriba izquierda
                upLeftFalse();
                debugger;
                // esquina abajo izquierda
                downLeftFalse();
                // esquina arriba derecha
                upRightFalse();
                // esquina abajo derecha
                downRightFalse();
                // fila arriba
                topFalse();
                // columna derecha
                rightFalse();
                // fila abajo
                downFalse();
                // columna izquierda
                leftFalse();
                // centro
                centerFalse();
            }
            if (array[i][j] === true) {
                let count = 0;
                // esquina arriba izquierda
                upLeftTrue();
                // esquina abajo izquierda
                downLeftTrue();
                // esquina arriba derecha
                upRightTrue();
                // esquina abajo derecha
                downRightTrue();
                // fila arriba
                topTrue();
                // columna derecha
                rightTrue();
                // fila abajo
                downTrue();
                // columna izquierda
                leftTrue();
                // centro
                centerTrue();
            }
        }
    }
    array = arrayResult;

    console.table(array);
};
const repeating = setInterval(gameOfLife, 1000);
