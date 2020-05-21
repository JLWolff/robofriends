import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App'	


//react functions like that, you have te big file and you have to return the documents
// you are using JSX when using these html alike tags, when you want to use js
// you should just use the {}. 
ReactDOM.render(
<App />, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
