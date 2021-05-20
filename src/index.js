import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals';

var START_ARTICLES = [
    {
        title: "Le livre de la jungle",
        content: "Curabitur purus tellus, dignissim ac bibendum sed, scelerisque sit amet.",
        created_at: new Date()
    },
    {
        title: "Tenet",
        content: "Donec lacinia ex nec erat sagittis, a posuere odio consequat.",
        created_at: new Date()
    },
    {
        title: "Interstellar",
        content: "Nunc urna neque, finibus fermentum molestie eu, faucibus consectetur massa.",
        created_at: new Date()
    },
    {
        title: "Usual suspects",
        content: "Aliquam in vestibulum velit. Ut varius, elit vitae egestas consectetur.",
        created_at: new Date()
    },
    {
        title: "Oss 117 Alert rouge en Afrique noire",
        content: "Pellentesque eu efficitur urna. Nam pellentesque facilisis quam vitae iaculis.",
        created_at: new Date()
    },
    {
        title: "James Bond mourir peut attendre",
        content: "Nullam ut nisl imperdiet, sodales augue id, venenatis risus. Ut.",
        created_at: new Date()
    },
    {
        title: "Matrix",
        content: "Aliquam in vestibulum velit. Ut varius, elit vitae egestas consectetur.",
        created_at: new Date()
    },
    {
        title: "Blade Runner 2049",
        content: "Curabitur purus tellus, dignissim ac bibendum sed, scelerisque sit amet.",
        created_at: new Date()
    }
]

ReactDOM.render(
  <React.StrictMode>
    <App start_articles={START_ARTICLES} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
