import React from 'react';
import './App.css';
import { BACKEND_URL } from './Shared';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            categories: [],
        };
    }

    componentDidMount() {
        let retryCounter = 0;
        const loadData = retryCount => {
            if (retryCount < 4) {
                console.log('loadData() retry' + retryCount);
                fetch(BACKEND_URL + '/category')
                    // Retrieve its body as ReadableStream
                    .then(response => response.json())
                    .then(
                        menu => {
                            this.setState({
                                isLoaded: true,
                                categories: menu,
                            });
                        },
                        error => {
                            console.log('trying again...');
                            setTimeout(() => {
                                loadData(++retryCount);
                            }, 500);
                            console.error(`ERROR ${error}`);
                        }
                    );
            }
        };
        loadData(0);
    }

    render() {
        console.log('render()');
        let page = this.state.isLoaded ? (
            <div>
                {this.state.categories.map((category, index) => {
                    return <Category key={index} category={category} />;
                })}
            </div>
        ) : (
            <div>Oops! Something went wrong</div>
        );

        return (
            <div className="app-box">
                <h1 className="main-title font-face-pacifico">
                    <u>Lord's Bakers</u>
                </h1>
                {page}
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

export default Card;
