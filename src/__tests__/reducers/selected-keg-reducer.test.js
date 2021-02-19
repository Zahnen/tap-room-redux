import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe ('selectedKegReducer', () => {

  test('Should return default state if no action is passed into reducer', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });
});