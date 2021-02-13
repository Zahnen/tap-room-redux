import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.handleKegFormSubmission} class='form-group'>
        <input class='form-control'
        type='text'
        name='name'
        placeholder='Beer Name' />
        <input class='form-control'
        type='text'
        name='brand'
        placeholder='Brewer' />
        <input class='form-control'
        type='text'
        name='price'
        placeholder='Price (per Pint)' />
        <input class='form-control'
        type='text'
        name='abv'
        placeholder='Alcohol by Volume (abv)' />
        <input class='form-control'
        type='number'
        min='0'
        name='pintsLeft'
        placeholder='Pints Remaining in Keg' />
        <button type='submit' class='btn btn-warning'>Save</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  handleKegFormSubmission: PropTypes.func
};

export default ReusableForm;