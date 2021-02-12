import React from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";

function NewKegForm(props) {

  function handleNewKegSubmission(event){
    event.preventDefault();
    props.onKegAdd({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, pintsLeft: parseInt(event.target.pintsLeft.value), id: v4()});
  }

  return (
    <>
      <form onSubmit={handleNewKegSubmission}>
        <input
        type='text'
        name='name'
        placeholder='Beer Name' />
        <input
        type='text'
        name='brand'
        placeholder='Brewer' />
        <input
        type='text'
        name='price'
        placeholder='Price (per Pint)' />
        <input
        type='text'
        name='abv'
        placeholder='Alcohol by Volume (abv)' />
        <input
        type='text'
        name='pintsLeft'
        placeholder='Pints Remaining in Keg' />
        <button type='submit'>Add Keg to Keg List</button>
      </form>
    </>
  );
}

NewKegForm.propTypes = {
  onKegAdd: PropTypes.func
}

export default NewKegForm;