import rootReducer from '../../reducers/index';

describe ('rootReducer', () => {

  test('Should return default state if no action is passed into reducer', () => {
    expect(rootReducer({}, { type: null})).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      editing: false,
      selectedKeg: null
    });
  });
});