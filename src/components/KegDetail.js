import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const {keg} = props;
  return (
    <>
      <h1>{keg.name} Details</h1>
      <h3>Brewer: {keg.brand}</h3>
      <h3>ABV: {keg.abv}</h3>
      <h3>Price Per Pint: {keg.price}</h3>
      {keg.pintsLeft === 0 ? <h3>Out of Stock</h3> : <h3>Pints Remaining in Keg: {keg.pintsLeft}</h3>}
      {keg.pintsLeft > 0 ? <button onClick={props.onClickingSell}>Sell a Pint</button> : null}
    </>
  );
}

KegDetail.propTypes ={
  keg: PropTypes.object,
  onClickingSell: PropTypes.func
}

export default KegDetail;