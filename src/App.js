import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
    return (
        <div>
            <h1>Menu card</h1>
            <Card />
        </div>
    );
}

class Card extends React.Component {
    renderCategory(i) {
        return <div>this is a category {i}</div>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderCategory(0)}
                    {this.renderCategory(1)}
                    {this.renderCategory(2)}
                </div>
                <div className="board-row">
                    {this.renderCategory(3)}
                    {this.renderCategory(4)}
                    {this.renderCategory(5)}
                </div>
                <div className="board-row">
                    {this.renderCategory(6)}
                    {this.renderCategory(7)}
                    {this.renderCategory(8)}
                </div>
            </div>
        );
    }
}

export default App;
