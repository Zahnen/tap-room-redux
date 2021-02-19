import editingReducer from '../../reducers/editing-reducer';

describe('editingReducer', () => {

  test('Should return default state if no action is passed into reducer', () => {
    expect(editingReducer(false, { type: null})).toEqual(false);
  });

  test('Should toggle form visible boolean from false to true', () => {
    expect(editingReducer(false, {type: 'TOGGLE_EDIT'})).toEqual(true);
  });
});