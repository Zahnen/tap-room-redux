import React from 'react';
import PropTypes from "prop-types";
import KegFull from './../img/KegFull.svg';
import KegLow from './../img/KegLow.svg';
import KegEmpty from './../img/KegEmpty.svg';



function Keg(props){
  const kegDisplayStyles = {
    textAlign: 'center',
  }
  return (
    <>
    <div style = {kegDisplayStyles} className="col-4" onClick={() => props.whenKegClicked(props.id)}>
      {props.pintsLeft === 0 ? <img src={KegEmpty} alt="Empty Keg"/> : props.pintsLeft > 10 ? <img src={KegFull} alt="Full Keg"/> : <img src={KegLow} alt="Low Keg"/> }
      <h3>{props.name}</h3>
      <h4><em>{props.brand}</em></h4>
      <p>{props.abv}% ABV | {props.pintsLeft} Pints Remaining</p>
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