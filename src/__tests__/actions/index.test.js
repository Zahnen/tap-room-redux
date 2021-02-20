import * as actions from './../../actions';

describe('Hopper actions', () => {

  test('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'Mead',
      brand: 'Brewer2',
      price: '$3.50',
      abv: '3.8',
      id: 2,
      pintsLeft: 9}))
    .toEqual({
      type: 'ADD_KEG',
      name: 'Mead',
      brand: 'Brewer2',
      price: '$3.50',
      abv: '3.8',
      id: 2,
      pintsLeft: 9})
  });
  test('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });
});