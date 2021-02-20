export const addKeg = (keg) => {
  const { name, brand, price, abv, id, pintsLeft } = keg;
  return {
    type: 'ADD_KEG',
    name,
    brand,
    price,
    abv,
    id,
    pintsLeft
  }
}

export const deleteKeg = (id) => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const toggleEdit = () => ({
  type: 'TOGGLE_EDIT'
});

export const selectKeg = (keg) => ({

});