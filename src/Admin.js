import React from 'react';
import './App.css';
import './admin.css';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            categories: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/category')
            .then(response => response.json())
            .then(
                menu => {
                    this.setState({
                        isLoaded: true,
                        categories: menu,
                    });
                    console.log(this.state[0]);
                },
                error => {
                    this.setState({
                        isLoaded: false,
                        categories: [],
                    });
                    console.error(`ERROR ${error}`);
                }
            );
    }

    AddCategory() {
        console.error('not implemented');
    }

    deleteCategory(index) {
        const conformBox = window.confirm(
            `Do you really want to delete the ${this.state.categories[0].name} category? All of its ${this.state.categories.length} items will be deleted as well`
        );
        if (conformBox) {
            let newCategories = this.state.categories.slice();
            newCategories.splice(index, 1);
            this.setState({ isLoaded: true, categories: newCategories });
        }
    }

    deleteItem(itemIndex, categoryIndex) {
        let newCategories = this.state.categories.slice();
        newCategories[categoryIndex].items.splice(itemIndex, 1);
        this.setState({ isLoaded: true, categories: newCategories });
    }

    render() {
        let page = this.state.isLoaded ? (
            <div className="card-box">
                <div className="add-button-box font-face-pacifico ">
                    <h3>Create Category</h3>
                    <button
                        className="add-button"
                        onClick={() => this.AddCategory()}
                    >
                        <div className="icon-box">
                            <AddIcon />
                        </div>
                    </button>
                </div>

                {this.state.categories.map((category, index) => {
                    return (
                        <CategoryEditor
                            categoryIndex={index}
                            category={category}
                            onDeleteCategory={() => this.deleteCategory(index)}
                            onDeleteItem={(itemIndex, categoryIndex) =>
                                this.deleteItem(itemIndex, categoryIndex)
                            }
                        />
                    );
                })}
            </div>
        ) : (
            <div>Oops! Something went wrong</div>
        );

        return (
            <div className="admin-box">
                <h4 className="main-title font-face-pacifico">
                    <u>Admin Page</u>
                </h4>
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
                <h3 className="category-editor-title font-face-pacifico">
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
            <div className="item-box">
                <span>{this.props.value.name}</span>
                <span>{this.props.value.price} </span>
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
