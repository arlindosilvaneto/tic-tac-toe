import React, { Component, createContext } from 'react';

import Board from '../../components/board';
import Panel from '../../components/panel';

export const GameContext = createContext();
const defaultState = {
    gameState: '---------',
    player: 'O',
    winner: '',
    lastMoves: []
}

export default class Game extends Component {
    state = defaultState;

    onSquareClick = (index) => {
        const player = this.state.player,
            lastMoves = this.state.lastMoves;

        const gameState = this.state.gameState.split('');
        gameState[index] = player;

        lastMoves.push(index);

        this.setState({
            gameState: gameState.join(''),
            player: player === 'O' ? 'X' : 'O',
            lastMoves
        });
    }

    onGameReset = () => {
        this.setState(defaultState);
    }

    onRewindMove = () => {
        const lastMoves = this.state.lastMoves,
            gameState = this.state.gameState.split(''),
            player = this.state.player;

        if(lastMoves.length > 0) {
            gameState[lastMoves.pop()] = '-';

            this.setState({
                gameState: gameState.join(''),
                player: player === 'O' ? 'X' : 'O',
                lastMoves
            });
        }
    }

    render() {
        return (
            <div className="game-wrapper">
                <Board state={this.state.gameState} onClick={this.onSquareClick} />
                <Panel player={this.state.player} onReset={this.onGameReset} onRewind={this.onRewindMove} />
            </div>
        );
    }
}