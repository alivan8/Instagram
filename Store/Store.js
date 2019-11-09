import {createStore, conbineReducers, combineReducers} from 'redux';

const reducerPruebas = (state = [], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];

    default:
      return state;
  }
};

const reducers = combineReducers({
  reducerPruebas,
});

const store = createStore(reducers);

export default store;
