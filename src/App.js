import React from 'react';
import Card from './Card';
import Admin from './Admin/Admin';
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
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
