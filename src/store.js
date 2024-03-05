import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import  { thunk }  from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducer } from './redux/reducers/userReducer';

const rootReducer = combineReducers({
    usersList: userReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
    

