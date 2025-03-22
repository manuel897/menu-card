'use client'

import React, { useState, useEffect, useCallback } from 'react';
import '@/styles/app.css';
import { BACKEND_URL } from '@/urls';

const Card = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    const loadData = useCallback((retryCount = 0) => {
        if (retryCount >= 4) {
            setError('Failed to fetch categories.');
            return;
        }
        console.log('BACKEND URL :', BACKEND_URL);

        fetch(`${BACKEND_URL}/categories.json`)
            .then(response => {
                if (!response.ok)
                    throw new Error('Network response was not ok');
                return response.text();
            })
            .then(text => {
                console.log('Raw response:', text); // check what you got
                const json = JSON.parse(text); // manually parse (to catch JSON issues)

                setCategories(json);
                setIsLoaded(true);
                setError(null);
            })
            .catch(err => {
                console.error(`Retry #${retryCount}: ${err}`);
                setTimeout(() => {
                    loadData(retryCount + 1);
                }, Math.pow(2, retryCount) * 500);
            });
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <div className="app">
            <div className="app-box">
                <div className="title-box">
                    <span className="main-title">
                        <u>Lord's Bakers</u>
                    </span>
                    <div className="secondary-title">
                        <span>M E N U</span>
                    </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                {!isLoaded && !error && <div>Loading...</div>}

                {isLoaded && (
                    <div>
                        {categories.map(category => (
                            <Category
                                key={category.id || category.name}
                                category={category}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Category = ({ category }) => (
    <div>
        <h3 className="category-title">{category.name}</h3>
        <ol>
            {category.items.map(item => (
                <li key={item.id || item.name}>
                    <Item item={item} />
                </li>
            ))}
        </ol>
    </div>
);

const Item = ({ item }) => (
    <div className="item-box">
        <span>{item.name}</span>
        <span>{item.price}</span>
    </div>
);

export default Card;
