import React from "react";
import PropTypes from "prop-types";

function NewKegForm(props) {
  return (
    <>
      <form>
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
        name='Price'
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
  submitHandler: PropTypes.func
}

export default NewKegForm;