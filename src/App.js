import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import data from './data';

function App() {
    return (
        <div className="App">
            <h1 className="Main-title font-face-pacifico">Lord's Bakery</h1>
            <Card />
        </div>
    );
}

class Card extends React.Component {
    render() {
        return (
            <div>
                <Category category={data[0]} />
                <Category category={data[1]} />
            </div>
        );
    }
}

class Category extends React.Component {
    render() {
        return (
            <div>
                <h3 className="Category-title font-face-pacifico">
                    {this.props.category.name}
                </h3>
                <ul>
                    {this.props.category.items.map((item, index) => {
                        return (
                            <li key={index}>
                                <Item value={item} />{' '}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

class Item extends React.Component {
    render() {
        return (
            <div>
                {this.props.value.name} - {this.props.value.price}
            </div>
        );
    }
}

export default App;
