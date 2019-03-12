import React from 'react';

import Square from '../square';

import './board.css';

const emptyState = '---------',
    emptyFunction = () => {};

const Board = ({state, onClick = emptyFunction}) => {
    state = state && state.length === 9 ? state : emptyState;
    const squareStates = state.split('');

    return (
        <div className="board-wrapper">
            {squareStates.map((squareState, index) => {
                return <Square key={`square_${index}`} state={squareState} onClick={() => onClick(index)} />
            })}
        </div>
    );
};

export default Board;