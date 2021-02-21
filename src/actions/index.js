import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, abv, id, pintsLeft } = keg;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    abv,
    id,
    pintsLeft
  }
}

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleEdit = () => ({
  type: c.TOGGLE_EDIT
});

export const selectKeg = (keg) => ({
  type: c.SELECT_KEG,
  selectedKeg: keg
});