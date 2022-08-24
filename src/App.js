// import logo from './logo.svg';
// import ReactDOM from 'react-dom/client';
import React from 'react';
import Card from './Card';
import Admin from './Admin';
import CategoryCreator from './CategoryCreator/CategoryCreator';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Card />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="category" element={<CategoryCreator />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
