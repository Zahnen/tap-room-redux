import masterKegListReducer from '../../reducers/keg-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import editingReducer from '../../reducers/editing-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import rootReducer from '../../reducers/index';
import { createStore } from 'redux';

let store = createStore(rootReducer);

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
});