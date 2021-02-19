import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe ('selectedKegReducer', () => {

  let action;
  const currentState = {
    1 : {
      name: 'Beer',
      brand: 'Brewer',
      price: '$2.50',
      abv: '4.2',
      id: 1,
      pintsLeft: 124
    },
    2 : {
      name: 'Mead',
      brand: 'Brewer2',
      price: '$3.50',
      abv: '3.8',
      id: 2,
      pintsLeft: 9
    }
  }

  test('Should return default state if no action is passed into reducer', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should return a selected keg object', () => {
    action = {
      type: 'SELECT_KEG',
      id: 2
    };
    expect(selectedKegReducer(currentState, action)).toEqual({
        name: 'Mead',
        brand: 'Brewer2',
        price: '$3.50',
        abv: '3.8',
        id: 2,
        pintsLeft: 9
      });
  });
});