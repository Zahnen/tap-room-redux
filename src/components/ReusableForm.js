import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.handleKegFormSubmission} className='form-group'>
        <input className='form-control'
        type='text'
        name='name'
        placeholder='Beer Name' />
        <input className='form-control'
        type='text'
        name='brand'
        placeholder='Brewer' />
        <input className='form-control'
        type='text'
        name='price'
        placeholder='Price (per Pint)' />
        <input className='form-control'
        type='text'
        name='abv'
        placeholder='Alcohol by Volume (abv)' />
        <input className='form-control'
        type='number'
        min='0'
        name='pintsLeft'
        placeholder='Pints Remaining in Keg' />
        <button type='submit' className='btn btn-warning'>Save</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  handleKegFormSubmission: PropTypes.func
};

export default ReusableForm;