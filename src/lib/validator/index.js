
const gameValidator = (state) => {
    const squares = state.split(''),
        canBeDraw = squares.indexOf('-') === -1;

    const winnings = [
        '111000000', '000111000', '000000111',
        '100100100', '010010010', '001001001',
        '100010001', '001010100'
    ];

    const oPattern = parseInt( state.replace(/O/g, '1').replace(/[X-]/g, '0'), 2 );
    const xPattern = parseInt( state.replace(/X/g, '1').replace(/[O-]/g, '0'), 2 );

    for(let winning in winnings) {
        const winningPattern = parseInt(winnings[winning], 2);
        const oResult = oPattern & winningPattern;
        const xResult = xPattern & winningPattern;
        
        if(oResult.toString(2) === winningPattern.toString(2)) {
            return 'O';
        } else if(xResult.toString(2) === winningPattern.toString(2)) {
            return 'X';
        }
    }

    return canBeDraw ? 'OX' : '';
};

export default gameValidator;