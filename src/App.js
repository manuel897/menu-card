import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import data from './data';

function App() {
    return (
        <div>
            <h1>Menu card</h1>
            <Card />
        </div>
    );
}

class Card extends React.Component {
    // renderCategory(category) {
    //     return (
    //         <div>
    //             <h3>Category</h3>
    //             <div>this is a category {category.name}</div>
    //         </div>
    //     );
    // }

    render() {
        return (
            <div>
                <Category category={data[0]} />
                <Category category={data[1]} />
            </div>

            // { <div>
            //     <div className="board-row">
            //         {this.renderCategory(categories[0])}
            //         {this.renderCategory(1)}
            //         {this.renderCategory(2)}
            //     </div>
            //     <div className="board-row">
            //         {this.renderCategory(3)}
            //         {this.renderCategory(4)}
            //         {this.renderCategory(5)}
            //     </div>
            //     <div className="board-row">
            //         {this.renderCategory(6)}
            //         {this.renderCategory(7)}
            //         {this.renderCategory(8)}
            //     </div>
            // </div> }
        );
    }
}

class Category extends React.Component {
    render() {
        // let itemList = this.props.category.items.map((item, index) => {
        //     return <Item value={item} />;
        // });
        return (
            <div>
                <h3>{this.props.category.name}</h3>
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
