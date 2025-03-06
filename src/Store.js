import {legacy_createStore as createStore} from 'redux';
import CartReducer from './Reducer/Reducer';

const store = createStore(CartReducer);
export default store;