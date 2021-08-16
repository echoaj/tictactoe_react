// Tutorial Link: https://reactjs.org/tutorial/tutorial.html
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

// Function Component - Displays value when button clicked
// props are (onClick & value)
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

// COMPONENT 1
//class Square extends React.Component {
    /*
    In JavaScript classes, you need to always call super when defining the constructor of a subclass. 
    All React component classes that have a constructor should start with a super(props) call.
    */

    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         value:null,
    //     }
    // }

    /*
    As a next step, we want the Square component to “remember” that it got clicked, 
    and fill it with an “X” mark. To “remember” things, components use state.
    */
    // The render method returns a description of what you want to see on the screen.
//     render() {
//         return (
//             // Writting onClick={console.log("Clicked")} would fire evertime component re-renders
//             <button 
//                 className="square" 
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// COMPONENT 2
class Board extends React.Component {

    // 1
    // Creates Board states (Array & next) to set up game
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext:true,
        };
    }

    // 4
    handleClick(i){
        const squares = this.state.squares.slice();     // slice creates new copy of array
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares:squares,
            xIsNext:!this.state.xIsNext,
        });
    }
    
    // 3
    renderSquare(i) {
        return (
        <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />); // value is a prop
    }

    // 2
    // Sets up board layout
    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

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

// COMPONENT 3
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
