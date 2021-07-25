import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* React is a library */

/*
We use components to tell React what we want to see on the screen. When our data changes, 
React will efficiently update and re-render our components.
*/

/* DOM stands for Document Object Model.  It is the santard for manipulating and accessing
HTML and XML documents.  DOM Elements include head, tittle, body, and other tags. */ 

class Square extends React.Component {
    // The render method returns a description of what you want to see on the screen.
    render() {
        return (
            <button className="square" onClick={() => alert("Button pressed")}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            // The language below is not HTML, it is JSX (A syntax extension to JavaScript.)
            // It produces react elements and it is the reccomended sytax for React.
            // Also is reccommended to place JSX in () to avoid automatic semicolon insertion.
            // JSX helps prevent XSS (Cross-Site-Scripting Attacks)
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
        );
        }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                <Board />
                </div>
                <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));

/*
                                    OTHER NOTES
Babel is an open-source JavaScript transcompiler used to convert ECMAScript 2015+
code to a backwards compatible version JS that can be run by older JS engines.
Babel compiles JSX down to React.createElement() calls.
These two examples are identical

(-------1------)
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

(-------2------)
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

It then performs some checks and creates and object like this:
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

*/
