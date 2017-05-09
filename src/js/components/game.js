import React, { Component } from 'react';
import Board from "./board";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                movePosition: null
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 
                `Move # ${move} ${step.movePosition}` :
                'Game Start';
            
            // Bold the current selected step
            const styling = {
                fontWeight: move === this.state.stepNumber ? "bold" : ""
            }
            return (
                <li key={move} style={styling}>
                    <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
        });

        let status;
        let winningMove;
        if (winner) {
            winningMove = winner.winningMove;
            status = `Winner: ${winner.player}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
        <div className="game">
            <div className="game-board">
            <Board 
                squares={current.squares}
                winningMove={winningMove}
                onClick={(i) => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            </div>
        </div>
        );
    }
    
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { 
                    player: squares[a], 
                    winningMove: lines[i] 
                };
            }
        }
        return null;
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length-1];
        const squares = current.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                movePosition: this.getMovePosition(i)
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true,
        });
    }

    getMovePosition(i) {
        switch(i){
            case 0:
                return '(0, 0)';
            case 1:
                return '(0, 1)';
            case 2:
                return '(0, 2)';
            case 3:
                return '(1, 0)';
            case 4:
                return '(1, 1)';
            case 5:
                return '(1, 2)';
            case 6:
                return '(2, 0)';
            case 7:
                return '(2, 1)';
            case 8:
                return '(2, 2)';
            default:
                return '';
        }
    }
}

export default Game;