import React from "react";
import PropTypes from "prop-types";
import {Row, Col} from "react-bootstrap";
import KegFull from './../img/KegFull.svg';
import KegLow from './../img/KegLow.svg';
import KegEmpty from './../img/KegEmpty.svg';


function KegDetail(props){
  const {keg, onClickingDelete} = props;
  return (
    <>
      <h1 style={{marginTop: '30px'}}>{keg.name} Details</h1>
      <Row>
        <Col>
          <h3>Brewer: {keg.brand}</h3>
          <h3>ABV: {keg.abv}%</h3>
          <h3>Price Per Pint: ${keg.price}</h3>
          {keg.pintsLeft === 0 ? <h3>Out of Stock</h3> : keg.pintsLeft < 10 ? <h3>Low Stock! Refill Soon! Pints Remaining: {keg.pintsLeft}</h3> : <h3>Pints Remaining in Keg: {keg.pintsLeft}</h3>}
        </Col>
        <Col>
          {keg.pintsLeft === 0 ? <img src={KegEmpty} alt="Empty Keg"/> : keg.pintsLeft > 10 ? <img src={KegFull} alt="Full Keg"/> : <img src={KegLow} alt="Low Keg"/> }
        </Col>
      </Row>
      <Row>
          {keg.pintsLeft > 0 ? <button style={{marginRight: '10px'}} onClick={props.onClickingSell} className='btn btn-warning'>Sell a Pint</button> : null}
          <button style={{marginRight: '10px'}} onClick={props.onClickingEdit} className='btn btn-warning'>Edit Keg</button>
          <button style={{marginRight: '10px'}} onClick={() => onClickingDelete(keg.id)} className='btn btn-warning'>Delete Keg</button>
      </Row>
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