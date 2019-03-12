import gameValidator from './index';

describe('Game validator library', () => {
    const runningGame = '-XO-XOO--X',
        finishedGameForX = 'OO-XXX-O--',
        finishedGameForO = 'XOOXO-OX-',
        drawnGame = 'OXOOXXXOO';

    it('should return empty when game not finished', () => {
        const result = gameValidator(runningGame);

        expect(result).toBe('');
    });

    it('should return O when O has won', () => {
        const result = gameValidator(finishedGameForO);

        expect(result).toBe('O');
    });

    it('should return X when X has won', () => {
        const result = gameValidator(finishedGameForX);

        expect(result).toBe('X');
    });

    it('should return OX when game endded as a draw', () => {
        const result = gameValidator(drawnGame);

        expect(result).toBe('OX');
    });
});