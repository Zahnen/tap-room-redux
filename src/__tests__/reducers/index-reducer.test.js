import masterKegListReducer from '../../reducers/keg-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import editingReducer from '../../reducers/editing-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import rootReducer from '../../reducers/index';
import { createStore } from 'redux';

let store = createStore(rootReducer);
let action;

describe ('rootReducer', () => {

  test('Should return default state if no action is passed into reducer', () => {
    expect(rootReducer({}, { type: null})).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      editing: false,
      selectedKeg: null
    });
  });

  test('Check that initial state of masterKegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(masterKegListReducer(undefined, { type: null}));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null}));
  });

  test('Check that initial state of editingReducer matches root reducer', () => {
    expect(store.getState().editing).toEqual(editingReducer(undefined, { type: null}));
  });

  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null}));
  });

  test('Check that ADD_KEG action functions for both masterKegListReducer and root reducer', () => {
    action = {
      type: 'ADD_KEG',
      name: 'Beer',
      brand:'Brewer',
      price: '$4.00',
      abv: '3.2',
      id: 1,
      pintsLeft: 120
    };
    store.dispatch(action)
    expect(store.getState().masterKegList).toEqual(masterKegListReducer(undefined, action));
  });
});