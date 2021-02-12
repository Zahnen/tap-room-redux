import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.handleKegFormSubmission}>
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
        type='number'
        min='0'
        name='pintsLeft'
        placeholder='Pints Remaining in Keg' />
        <button type='submit'>Save</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  handleKegFormSubmission: PropTypes.func
};

export default ReusableForm;