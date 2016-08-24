import React from 'react';
import {render} from 'react-dom';
import App from './../components/App';
import configureStore from '../redux/store';
import '../styles/master.scss'


// connect store to components that need to know about it
// Provider wraps around app and gets the store that is pasted to it as a prop
import { Provider } from 'react-redux';


let initialState = {
    alternatives: [{
        id: 0,
        name: "initial alternative for test purposes",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }],
    criteria: [{
        id: 0,
        name: "initial criteria for test purposes",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        weight: 2
    }],
    scores: [[]],
    weightedScores: [[]]
    /*
    alternatives:[],
    criteria:[]
    */
};

// configure and create our store
let store = configureStore(initialState);
console.log(store);

render(
    <Provider store ={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)