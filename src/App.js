// import logo from './logo.svg';
// import ReactDOM from 'react-dom/client';
import React from 'react';
import Card from './Card';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Card />
            </div>
        );
    }
}

export default App;
