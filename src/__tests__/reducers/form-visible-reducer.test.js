import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from '../../actions/ActionTypes';

describe('formVisibleReducer', () => {
  test('Should return default state if no action is passed into reducer', () => {
    expect(formVisibleReducer(false, { type: null})).toEqual(false);
  });

  test('Should toggle form visible boolean from false to true', () => {
    expect(formVisibleReducer(false, {type: c.TOGGLE_FORM})).toEqual(true);
  });
});