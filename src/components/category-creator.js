import React from 'react';
import '@/styles/category-creator.css';
import '@/styles/shared.css';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';

class CategoryCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            items: [
                {
                    name: '',
                    price: '',
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
            price: '',
        });
        this.setState({ items: newItems });
    }

    createCategory() {
        if (!this.areFieldsEmpty()) {
            this.props.addCategory(this.state);
            this.setState({
                items: [
                    {
                        name: '',
                        price: '',
                    },
                ],
            });
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
            if (item.name === '' || item.price === '') {
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
            <div className="category-add-box">
                <form>
                    <input
                        id="category-name-input"
                        type="text"
                        value={this.state.categoryName}
                        onChange={e => this.handleChange(e)}
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
                                            placeholder="detail"
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

                <div className="buttons-box">
                    <div>
                        <button
                            className="done-button"
                            onClick={e => this.createCategory()}
                        >
                            <div className="icon-box">
                                Create Category
                                <AddCircleIcon />
                            </div>
                        </button>
                    </div>
                    <div>
                        <button
                            className="standard-button"
                            onClick={e => this.addItem(e)}
                        >
                            Add item
                            <div className="icon-box">
                                <AddIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryCreator;
