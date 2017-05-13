import React, { Component } from "react";
import Square from "./square";

/**
 *  DONE: Display the move locations in the format "(1, 3)" instead of "6".
 *  DONE: Bold the currently-selected item in the move list.
 *  DONE: Rewrite Board to use two loops to make the squares instead of hardcoding them.
 *  DONE: Add a toggle button that lets you sort the moves in either ascending or descending order.
  * DONE: When someone wins, highlight the three squares that caused the win.
 */
class Board extends Component {
    renderSquare(i) {
        let isWinningMove;
        if (this.props.winningMove) {
            isWinningMove = this.props.winningMove.includes(i);
        }
        return (
            <Square 
                value={this.props.squares[i]}
                key={i}
                isWinningMove={isWinningMove}
                onClick={() => this.props.onClick(i)}
             />
        );
    }

    renderSquares(row) {
        let columns = [];
        for (let column = 0; column < 3; column++) {
            let position = this.getArrayPosition(row, column);
            columns.push(this.renderSquare(position));
        }
        return columns;
    }

    render() {
        var rows = [];
        for (let i = 0; i < 3; i++) {
            rows.push(<div className="board-row" key={`row-${i}`}>{this.renderSquares(i)}</div>);
        }
        return (
        <div>
            {rows}
        </div>
        );
    }
    
    getArrayPosition(row, column) {
        switch(`(${row}, ${column})`){
            case '(0, 0)':
                return 0;
            case '(0, 1)':
                return 1;
            case '(0, 2)':
                return 2;
            case '(1, 0)':
                return 3;
            case '(1, 1)':
                return 4;
            case '(1, 2)':
                return 5;
            case '(2, 0)':
                return 6;
            case '(2, 1)':
                return 7;
            case '(2, 2)':
                return 8;
            default:
                return '';
        }
    }
}

export default Board;