import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';


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
      type: c.ADD_KEG,
      name: 'Mead',
      brand: 'Brewer2',
      price: '$3.50',
      abv: '3.8',
      id: 2,
      pintsLeft: 9})
  });

  test('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  test('toggleEdit should create TOGGLE_EDIT action', () => {
    expect(actions.toggleEdit()).toEqual({
      type: c.TOGGLE_EDIT
    });
  });

  test('selectKeg should create SELECT_KEG action', () => {
    const keg = {};
    expect(actions.selectKeg(keg)).toEqual({
      type: c.SELECT_KEG,
      selectedKeg: keg
    });
  });
});