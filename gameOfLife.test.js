import { gameOfLife } from './gameOfLife.js';
describe('cells born and die depending on 4 conditions', () => {
    test(`when there are less than 2 neighbours, she dies, when there are 2 or 3, survive, and when there are 3 one new get born`, () => {
        // Arrange
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

        const expectedResult = [
            [false, false, false, false],
            [false, false, false, false],
            [true, true, true, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
        // Act
        const result = gameOfLife(array, arrayResult);
        // Asset
        expect(result).toBe(expectedResult);
    });
});
