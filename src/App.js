// import logo from './logo.svg';
// import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';
import data from './data';

function App() {
    return (
        <div className="app">
            <div className="app-box">
                <h1 className="main-title font-face-pacifico">Lord's Bakers</h1>
                <Card />
            </div>
        </div>
    );
}

class Card extends React.Component {
    render() {
        return (
            <div className="card-box">
                <Category category={data[0]} />
                <Category category={data[1]} />
                <Category category={data[2]} />
            </div>
        );
    }
}

class Category extends React.Component {
    render() {
        return (
            <div>
                <h3 className="category-title font-face-pacifico">
                    {this.props.category.name}
                </h3>
                <ol>
                    {this.props.category.items.map((item, index) => {
                        return (
                            <li key={index}>
                                <Item value={item} />
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

class Item extends React.Component {
    render() {
        return (
            <div className="item-box">
                <span>{this.props.value.name}</span>
                <span>{this.props.value.price} </span>
            </div>
        );
    }
}

export default App;
