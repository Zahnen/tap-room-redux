import React from 'react';
import PropTypes from "prop-types";

function Keg(props){
  return (
    <>
      <h1>props.name</h1>
      <h1>props.brand</h1>
      <h1>props.price</h1>
      <h1>props.abv</h1>
      <h1>props.pintsLeft</h1>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  id: PropTypes.string,
  pintsLeft: PropTypes.number.isRequired
};

export default Keg;