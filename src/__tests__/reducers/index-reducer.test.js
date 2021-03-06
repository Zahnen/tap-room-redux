import masterKegListReducer from '../../reducers/keg-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import editingReducer from '../../reducers/editing-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe ('rootReducer', () => {

  test('Should return default state if no action is passed into reducer', () => {
    expect(rootReducer({}, { type: null})).toEqual({
      masterKegList: {},
      formVisible: false,
      editing: false,
      selectedKeg: null
    });
  });

  test('Check that initial state of masterKegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(masterKegListReducer(undefined, { type: null}));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, { type: null}));
  });

  test('Check that initial state of editingReducer matches root reducer', () => {
    expect(store.getState().editing).toEqual(editingReducer(undefined, { type: null}));
  });

  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null}));
  });

  test('Check that ADD_KEG action functions for both masterKegListReducer and root reducer', () => {
    let action = {
      type: c.ADD_KEG,
      name: 'Beer',
      brand:'Brewer',
      price: '$4.00',
      abv: '3.2',
      id: 1,
      pintsLeft: 120
    };
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(masterKegListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action functions for both formVisibleReducer and root reducer', () => {
    let action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that TOGGLE_EDIT action functions for both editingReducer and root reducer', () => {
    let action = {
      type: c.TOGGLE_EDIT
    }
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(undefined, action));
  });

  test('Check that SELECT_KEG action functions for both selectedKegReducer and root reducer', () => {

    let selectedTestKeg = {
      name: 'Mead',
      brand: 'Brewer2',
      price: '$3.50',
      abv: '3.8',
      id: 2,
      pintsLeft: 9
      }
    let action = {
      type: c.SELECT_KEG,
      selectedKeg: selectedTestKeg
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });
});