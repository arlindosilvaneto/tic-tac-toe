import React from 'react';

import './panel.css';

const emptyFunction = () => {};

const Panel = ({player = 'O', onReset = emptyFunction}) => {
    const playerClass = `sprite-${player.toLowerCase()}-state`;

    return (
        <div className='panel-wrapper'>
            <div className='turn-info'>
                <span className='turn-title'>Turn</span>
                <div className={`turn-icon ${playerClass}`}></div>
            </div>

            <div className='button-bar'>
                <button id='reset-game' onClick={onReset}>Reset Game</button>
            </div>
        </div>
    );
};

export default Panel;