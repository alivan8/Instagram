import {createStore, conbineReducers, combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

const reducerPruebas = (state = [], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];

    default:
      return state;
  }
};
//a
const reducers = combineReducers({
  reducerPruebas,
  form,
});

const store = createStore(reducers);

export default store;
