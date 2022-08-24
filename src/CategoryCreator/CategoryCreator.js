import React from 'react';
import './CategoryCreator.css';
import './../Shared.css';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import { Category, WindowRounded } from '@mui/icons-material';

class CategoryCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            items: [
                {
                    name: '',
                    price: 0,
                },
            ],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    addItem(e) {
        let newItems = this.state.items.slice();
        newItems.push({
            name: '',
            price: 0,
        });
        this.setState({ items: newItems });
        console.log(newItems);
    }

    createCategory() {
        // console.log(this.state.name);
        // console.log(this.state.items);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state),
        };
        console.log(requestOptions);
        window
            .fetch('http://localhost:8080/category/add', requestOptions)
            .then(
                res => {
                    // TODO check status of response
                    window.location.href = 'http://localhost:3000/admin';
                },
                error => {
                    console.error(error);
                    window.alert(
                        'The category could not be created. Make sure all fields are filled'
                    );
                }
            )
            .then(category => console.log(category));
    }

    updateItem(index, newItem) {
        let newItems = this.state.items.slice();
        newItems[index] = newItem;
        this.setState({ items: newItems });
    }

    render() {
        return (
            <div className="category-creator-box">
                <h1 className="main-title font-face-pacifico">
                    <u>New Category</u>
                </h1>
                <form>
                    <input
                        type="text"
                        value={this.state.categoryName}
                        onChange={this.handleChange}
                        placeholder="Category name"
                    />
                </form>
                <ol>
                    {this.state.items.map((item, index) => {
                        return (
                            <li key={index}>
                                <ItemCreator
                                    index={index}
                                    value={item}
                                    updateItem={(index, newItem) => {
                                        this.updateItem(index, newItem);
                                    }}
                                />
                            </li>
                        );
                    })}
                </ol>

                <button
                    className="standard-button"
                    onClick={e => this.addItem(e)}
                >
                    Add item
                    <div className="icon-box">
                        <AddIcon />
                    </div>
                </button>
                <br />
                <button
                    className="done-button"
                    onClick={e => this.createCategory()}
                >
                    <div className="icon-box">
                        Done
                        <DoneIcon />
                    </div>
                </button>
            </div>
        );
    }
}

class ItemCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleNameChange(e) {
        this.setState(
            {
                name: e.target.value,
            },
            () => this.props.updateItem(this.props.index, this.state)
        );
    }

    handlePriceChange(e) {
        this.setState(
            {
                price: e.target.value,
            },
            () => this.props.updateItem(this.props.index, this.state)
        );
    }

    render() {
        return (
            <div className="item-creator-box">
                <div>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        placeholder="Item name"
                    />
                </div>
                <span></span>
                <div>
                    <input
                        type="number"
                        value={this.state.price}
                        onChange={this.handlePriceChange}
                        placeholder="price"
                    />
                </div>

                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Item name:
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            value={this.state.price}
                            onChange={this.handlePriceChange}
                        />
                    </label>
                </form> */}
            </div>
        );
    }
}

export default CategoryCreator;
