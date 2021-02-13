import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const {keg, onClickingDelete} = props;
  return (
    <>
      <h1>{keg.name} Details</h1>
      <h3>Brewer: {keg.brand}</h3>
      <h3>ABV: {keg.abv}</h3>
      <h3>Price Per Pint: {keg.price}</h3>
      {keg.pintsLeft === 0 ? <h3>Out of Stock</h3> : keg.pintsLeft < 10 ? <h3>Low Stock! Refill Soon! Pints Remaining: {keg.pintsLeft}</h3> : <h3>Pints Remaining in Keg: {keg.pintsLeft}</h3>}
      {keg.pintsLeft > 0 ? <button onClick={props.onClickingSell} class='btn btn-warning'>Sell a Pint</button> : null}
      <button onClick={props.onClickingEdit} class='btn btn-warning'>Edit Keg</button>
      <button onClick={() => onClickingDelete(keg.id)} class='btn btn-warning'>Delete Keg</button>
    </>
  );
}

KegDetail.propTypes ={
  keg: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;