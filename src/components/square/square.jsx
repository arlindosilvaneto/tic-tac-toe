import React from 'react';

const emptyState = '-',
    emptyFunction = () => {};

export const Square = ({ state = emptyState, onClick = emptyFunction }) => {
    const hasState = state !== emptyState,
        stateClass = hasState ? `sprite-${state.toLowerCase()}-state` : '';

    return (
        <div className="square-wrapper" 
            onClick={hasState ? emptyFunction : onClick}>
            <div className={stateClass}></div>
        </div>
    );
};

export default Square;