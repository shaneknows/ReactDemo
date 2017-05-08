import React, { Component } from "react";
import Square from "./square";

class Board extends Component {
    renderSquare(i) {
        return (
            <Square 
                value={this.props.squares[i]}
                key={i}
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