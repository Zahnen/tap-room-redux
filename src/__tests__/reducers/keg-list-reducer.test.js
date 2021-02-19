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
      id,
      pintsLeft
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name,
        brand,
        price,
        id,
        pintsLeft
      }
    });
  });
});