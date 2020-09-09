
import { createStore, combineReducers } from 'redux';
import LoginReducer from '../src/reducers';

const rootReducer = combineReducers(
    { login: LoginReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
