import React from 'react';

import './overlay.css';

const Overlay = ({open = false, winner = '', onReset}) => {
    const winnerClass = winner !== 'OX' ? `sprite-${winner.toLowerCase()}-state` : '';

    return open ? (
        <div className="overlay-wrapper">
            <div className='winner-icon'>
                <div className={winnerClass} />
            </div>
            <div className='winner-title'>
                {winner === 'OX' ? 'Draw!' : 'Won!'}
            </div>
            <div className='button-bar'>
                <button onClick={onReset}>New Game</button>
            </div>
        </div>
    ) : null;
};

export default Overlay;