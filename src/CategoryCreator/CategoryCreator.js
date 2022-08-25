import React from 'react';
import './CategoryCreator.css';
import './../Shared.css';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { unmountComponentAtNode } from 'react-dom';

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
    }

    createCategory() {
        if (!this.areFieldsEmpty()) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state),
            };
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
        } else {
            window.alert(
                'Some fields are empty.Please fill all fileds to contine'
            );
        }
    }

    areFieldsEmpty() {
        let fieldsEmpty = false;
        if (this.state.name === '') {
            fieldsEmpty = true;
        }
        this.state.items.forEach(item => {
            if (item.name === '' || item.price == 0) {
                fieldsEmpty = true;
            }
        });
        return fieldsEmpty;
    }

    updateItem(index, newItem) {
        let newItems = this.state.items.slice();
        newItems[index] = newItem;
        this.setState({ items: newItems });
    }

    deleteItem(index) {
        console.log(`delete ${index}`);
        // unmountComponentAtNode(document.getElementById('item-' + index));
        let newItems = this.state.items.slice();
        newItems.splice(index, 1);
        this.setState({ name: this.state.name, items: newItems });
    }

    render() {
        return (
            <div className="category-creator-box">
                <h4 className="main-title">
                    <u>New Category</u>
                </h4>
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
                                    deleteItem={index => this.deleteItem(index)}
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
                <div className="buttons-box">
                    <div>
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
                    <div>
                        <button
                            className="standard-button"
                            onClick={() => {
                                window.location.href =
                                    'http://localhost:3000/admin';
                            }}
                        >
                            <div className="icon-box">
                                Back
                                <ArrowBackIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

class ItemCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.value.name,
            price: this.props.value.price,
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

    deleteItem() {
        this.props.deleteItem(this.props.index);
    }

    render() {
        console.log(`render item`);
        // console.log(this.state);

        return (
            <div id={'item-' + this.props.index} className="item-creator-box">
                <div>
                    <input
                        type="text"
                        value={this.props.value.name}
                        onChange={this.handleNameChange}
                        placeholder="Item name"
                    />
                </div>
                <span></span>
                <div>
                    <input
                        type="number"
                        value={this.props.value.price}
                        onChange={this.handlePriceChange}
                        placeholder="price"
                    />
                </div>
                <div>
                    <button
                        className="delete-button"
                        onClick={() => this.deleteItem()}
                    >
                        <div className="icon-box">
                            <CloseIcon />
                        </div>
                    </button>
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
