import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, likeCount: 15, message: 'Hi how are you'},
  {id: 2, likeCount: 10, message: "It's my first post"},
  {id: 3, likeCount: 12, message: 'How are your it-kamasutra?'},
  {id: 4, likeCount: 14, message: 'Yo'},
];

let dialogsData = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Victor"},
  {id: 6, name: "Valera"},
];

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'How are your it-kamasutra?'},
  {id: 4, message: 'Yo'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
