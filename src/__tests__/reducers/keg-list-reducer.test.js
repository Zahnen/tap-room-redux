import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'Beer',
    brand: 'Brewer',
    price: '$3.50',
    abv: '3.2',
    id: 1,
    pintsLeft: 124
  }
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
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should add a new keg to masterKegList', () => {
    const { name, brand, price, abv, id, pintsLeft } = kegData;
    action = {
      type: 'ADD_KEG',
      name,
      brand,
      price,
      abv,
      id,
      pintsLeft
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name,
        brand,
        price,
        abv,
        id,
        pintsLeft
      }
    });
  });

  test('Should delete a keg from a list of kegs', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2 : {
        name: 'Mead',
        brand: 'Brewer2',
        price: '$3.50',
        abv: '3.8',
        id: 2,
        pintsLeft: 9
      }
    });
  });
});