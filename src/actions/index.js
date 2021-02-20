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