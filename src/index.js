import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddlewawre from 'redux-thunk';
import './index.css';
import App from './containers/App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots,requestRobots } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddlewawre, logger));


ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
