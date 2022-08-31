import React from 'react';
import './CategoryCreator.css';
import './../Shared.css';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

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
                'Some fields are empty.Please fill all fileds to continue'
            );
        }
    }

    areFieldsEmpty() {
        let fieldsEmpty = false;
        if (this.state.name === '') {
            fieldsEmpty = true;
        }
        this.state.items.forEach(item => {
            if (item.name === '' || item.price === 0) {
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
        let newItems = this.state.items.slice();
        newItems.splice(index, 1);
        this.setState({ items: newItems });
    }

    handleNameChange(e, index) {
        let newItems = this.state.items.slice();
        newItems[index].name = e.target.value;
        this.setState({
            items: newItems,
        });
    }

    handlePriceChange(e, index) {
        let newItems = this.state.items.slice();
        newItems[index].price = e.target.value;
        this.setState({
            items: newItems,
        });
    }

    render() {
        return (
            <div className="category-creator-box">
                <h2 className="admin-title">
                    <b>New Category</b>
                </h2>
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
                                <div className="edit-item-box">
                                    <div>
                                        <input
                                            type="text"
                                            value={item.name}
                                            onChange={e =>
                                                this.handleNameChange(e, index)
                                            }
                                            placeholder="Item name"
                                        />
                                    </div>
                                    <span></span>
                                    <div>
                                        <input
                                            type="text"
                                            value={item.price}
                                            onChange={e =>
                                                this.handlePriceChange(e, index)
                                            }
                                            placeholder="price"
                                        />
                                    </div>
                                    <div>
                                        <button
                                            className="delete-button"
                                            onClick={() =>
                                                this.deleteItem(index)
                                            }
                                        >
                                            <div className="icon-box">
                                                <CloseIcon />
                                            </div>
                                        </button>
                                    </div>
                                </div>
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

export default CategoryCreator;
