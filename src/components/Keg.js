import React from 'react';
import PropTypes from "prop-types";
import KegFull from './../img/KegFull.svg';
import KegLow from './../img/KegLow.svg';
import KegEmpty from './../img/KegEmpty.svg';



function Keg(props){
  return (
    <>
    <div onClick={() => props.whenKegClicked(props.id)}>
      {props.pintsLeft === 0 ? <img src={KegEmpty}/> : props.pintsLeft > 10 ? <img src={KegFull}/> : <img src={KegLow}/> }
      <h1>{props.name}</h1>
      <h1>{props.brand}</h1>
    </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  id: PropTypes.string,
  pintsLeft: PropTypes.number.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;