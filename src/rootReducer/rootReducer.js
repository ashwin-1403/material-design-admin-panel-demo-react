
import {combineReducers} from 'redux';
import SigninReducer from '../pages/auth/signin/slice';

const rootReducer = combineReducers({ 
    auth: SigninReducer
})

export default rootReducer;