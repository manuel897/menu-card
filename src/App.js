// import logo from './logo.svg';
// import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';
import data from './data';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            categories: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/category')
            // Retrieve its body as ReadableStream
            .then((response) => response.json())
            .then(
                (menu) => {
                    //  const reader = response.body.getReader();
                    console.log(menu);
                    this.setState({
                        isLoaded: true,
                        categories: menu,
                    });
                    console.log(this.state[0]);
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        categories: [],
                    });
                    console.error(`ERROR ${error}`);
                }
            );
    }

    render() {
        let page = this.state.isLoaded ? (
            <Card categories={this.state.categories} />
        ) : (
            <div>Oops! Something went wrong</div>
        );
        return (
            <div className="app">
                <div className="app-box">
                    <h1 className="main-title font-face-pacifico">
                        <u>Lord's Bakers</u>
                    </h1>
                    {page}
                </div>
            </div>
        );
    }
}

class Card extends React.Component {
    render() {
        console.log(this.state);
        return (
            <div className="card-box">
                {this.props.categories.map((category, index) => {
                    return <Category category={category} />;
                })}
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
