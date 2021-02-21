import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from '../../actions/ActionTypes';

describe ('selectedKegReducer', () => {

  test('Should return default state if no action is passed into reducer', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should return a selected keg object', () => {
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
    expect(selectedKegReducer(null, action)).toEqual(selectedTestKeg);
  });
});