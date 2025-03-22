'use client';

import React from 'react';
import '@/styles/app.css';
import '@/styles/admin.css';
import '@/styles/shared.css';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Login from '@/components/login';
import CategoryCreator from '@/components/category-creator';
import { BACKEND_URL, SELF_URL } from '@/urls';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: '',
      categories: [],
      activeMode: 'delete',
    };
  }

  goBack(e) {
    e.preventDefault();
    window.location.href = SELF_URL;
  }

  addCategory(category) {
    let newCategories = this.state.categories.slice();
    newCategories.unshift(category);
    this.setState({ categories: newCategories });
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
    console.log(this.state.categories);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.state.jwt,
      },
      body: JSON.stringify(this.state.categories),
    };

    window.fetch(BACKEND_URL + '/category/reset', requestOptions).then(
      (res) => {
        if (res.status == 200) {
          window.location.href = SELF_URL;
        } else {
          window.alert('Something went wrong. Try reloading the page');
        }
      },
      (error) => {
        console.error(error);
        // window.alert('Something went wrong. Try again later');
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
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //  Authorization: 'Bearer ' + this.state.jwt,
      },
    };

    window
      .fetch(BACKEND_URL + '/category', requestOptions)
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            categories: data,
          });
        },
        (error) => {
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
    let deleteModeSection = this.state.categories.map((category, index) => {
      return (
        <div className="app">
          <div>
            <CategoryEditor
              categoryIndex={index}
              category={category}
              onDeleteCategory={() => this.deleteCategory(index)}
              onDeleteItem={(itemIndex, categoryIndex) =>
                this.deleteItem(itemIndex, categoryIndex)
              }
            />
          </div>
        </div>
      );
    });

    let editorSection =
      this.state.jwt === '' ? (
        <Login setJwt={(jwt) => this.setJwt(jwt)} />
      ) : (
        <div>
          <div className="buttons-box">
            <div>
              <button className="done-button" onClick={() => this.resetMenu()}>
                Done
                <div className="icon-box">
                  <DoneIcon />
                </div>
              </button>
            </div>

            <div>
              <button
                className="standard-button"
                onClick={(e) => this.goBack(e)}
              >
                Cancel
                <div className="icon-box">
                  <ArrowBackIcon />
                </div>
              </button>
            </div>
          </div>

          <CategoryCreator addCategory={(c) => this.addCategory(c)} />

          {deleteModeSection}
        </div>
      );

    return (
      <div className="app">
        <div className="admin-page-box">
          <h2 className="admin-title">
            <b>Admin</b>
          </h2>
          {editorSection}
        </div>
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
