import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './fonts/Pacifico/Pacifico-Regular.ttf';
// import './fonts/Amatic_SC/AmaticSC-Bold.ttf';
// import './fonts/Roboto_Slab/RobotoSlab-VariableFont_wght.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <head>
            <title>Title of the document</title>
       <style>
       @font-face {
    font-family: 'Pacifico';
    src: local('Pacifico'),
        url('./fonts/Pacifico/Pacifico-Regular.ttf') format('truetype');
    font-weight: regular;
}  */}

        {/* @font-face {
    font-family: 'Amatic_SC';
    src: local('Amatic_SC'),
        url('./fonts/Amatic_SC/AmaticSC-Bold.ttf') format('truetype');
    font-weight: bold;
}

@font-face {
    font-family: 'RobotoSlab';
    src: local('RobotoSlab'),
        url('./fonts/Roboto_Slab/RobotoSlab-VariableFont_wght.ttf')
            format('truetype');
    font-weight: 'regular';
} */}
        {/* 
       </style>
        </head> */}
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
