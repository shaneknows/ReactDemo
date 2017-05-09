import React, { Component } from 'react';

/**
 * Controlled Component: Board handles all state for Square
 */
class Square extends Component {
    render() {
        const buttonStyle = {
            backgroundColor: (this.props.isWinningMove) ? 'yellow' : ''
        };
        return (
        <button className="square" onClick={() => this.props.onClick()} style={buttonStyle}>
            {this.props.value}
        </button>
        );
    }
}
export default Square;