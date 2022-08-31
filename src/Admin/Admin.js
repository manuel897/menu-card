import React from 'react';
import './../App.css';
import './Admin.css';
import './../Shared.css';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Login from '../Login/Login';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jwt: '',
            categories: [],
        };
    }

    addCategory(e) {
        console.error('not implemented');
        e.preventDefault();
        window.location.href = 'http://localhost:3000/category';
    }

    deleteCategory(index) {
        const conformBox = window.confirm(
            `Do you really want to delete the ${this.state.categories[0].name} category? All of its ${this.state.categories.length} items will be deleted as well`
        );
        if (conformBox) {
            let newCategories = this.state.categories.slice();
            newCategories.splice(index, 1);
            this.setState({ categories: newCategories });
        }
    }

    deleteItem(itemIndex, categoryIndex) {
        let newCategories = this.state.categories.slice();
        newCategories[categoryIndex].items.splice(itemIndex, 1);
        this.setState({ categories: newCategories });
    }

    resetMenu() {
        console.log(this.state);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.categories),
        };
        window
            .fetch('http://localhost:8080/category/reset', requestOptions)
            .then(
                res => {
                    // TODO check status of response
                    window.location.href = 'http://localhost:3000/';
                },
                error => {
                    console.error(error);
                    window.alert('Something went wrong. Try again later');
                }
            );
    }

    setJwt(jwt) {
        this.setState(
            {
                jwt: jwt,
            },
            () => this.getData()
        );
    }

    getData() {
        fetch('http://localhost:8080/category')
            .then(response => response.json())
            .then(
                menu => {
                    this.setState({
                        isLoaded: true,
                        categories: menu,
                    });
                },
                error => {
                    this.setState({
                        isLoaded: false,
                        categories: [],
                    });
                    // TODO handle error
                    console.error(`ERROR ${error}`);
                }
            );
    }
    render() {
        let page =
            this.state.jwt === '' ? (
                <Login setJwt={jwt => this.setJwt(jwt)} />
            ) : (
                <div>
                    <div className="buttons-box">
                        <div>
                            <button
                                className="done-button"
                                onClick={() => this.resetMenu()}
                            >
                                Done
                                <div className="icon-box">
                                    <DoneIcon />
                                </div>
                            </button>
                        </div>
                        <div>
                            <button
                                className="standard-button"
                                onClick={e => this.addCategory(e)}
                            >
                                Cancel
                                <div className="icon-box">
                                    <ArrowBackIcon />
                                </div>
                            </button>
                        </div>
                    </div>
                    <button
                        className="standard-button"
                        onClick={e => this.addCategory(e)}
                    >
                        Add Category
                        <div className="icon-box">
                            <AddIcon />
                        </div>
                    </button>

                    {this.state.categories.map((category, index) => {
                        return (
                            <div>
                                <CategoryEditor
                                    categoryIndex={index}
                                    category={category}
                                    onDeleteCategory={() =>
                                        this.deleteCategory(index)
                                    }
                                    onDeleteItem={(itemIndex, categoryIndex) =>
                                        this.deleteItem(
                                            itemIndex,
                                            categoryIndex
                                        )
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            );

        return (
            <div className="category-creator-box">
                <h2 className="admin-title">
                    <b>Admin</b>
                </h2>
                {page}
            </div>
        );
    }
}

class CategoryEditor extends React.Component {
    deleteItem(itemIndex) {
        this.props.onDeleteItem(itemIndex, this.props.categoryIndex);
    }

    render() {
        return (
            <div>
                <h3 className="category-editor-title">
                    {this.props.category.name}
                    <button
                        className="delete-button"
                        onClick={() => this.props.onDeleteCategory()}
                    >
                        <div className="icon-box">
                            <CloseIcon />
                        </div>
                    </button>
                </h3>
                <ol>
                    {this.props.category.items.map((item, index) => {
                        return (
                            <li key={index}>
                                <Item
                                    value={item}
                                    onDeleteItem={() => this.deleteItem(index)}
                                />
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
            <div className="edit-item-box">
                <div>{this.props.value.name}</div>
                <span></span>
                <div>{this.props.value.price} </div>
                <button
                    className="delete-button"
                    onClick={() => this.props.onDeleteItem()}
                >
                    <div className="icon-box">
                        <CloseIcon />
                    </div>
                </button>
            </div>
        );
    }
}

export default Admin;
