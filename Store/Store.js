import {createStore, conbineReducers, combineReducers} from 'redux';

const reducerPruebas = (state = [], action) => state;

const reducers = combineReducers({
  reducerPruebas,
});

const store = createStore(reducers);

export default store;
