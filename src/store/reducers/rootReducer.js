import {combineReducers} from 'redux';
import profileReducer from './profileReducer';
import headerReducer from './headerReducer';
import storeLocatorReducer from './storeLocatorReducer';
export default combineReducers({
    profileReducer,
    headerReducer,
    storeLocatorReducer,
})