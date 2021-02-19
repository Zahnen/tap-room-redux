export default (state = null, action) => {
  const { id } = action;
  switch(action.type) {
  case 'SELECT_KEG':
    let selectedKeg = state[id];
    return selectedKeg;
  default:
    return state;
  }
};