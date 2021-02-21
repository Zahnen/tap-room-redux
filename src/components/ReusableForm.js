import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
    {props.keg != null ?
      <form onSubmit={props.handleKegFormSubmission} className='form-group'>
        <input className='form-control'
        defaultValue={props.keg.name}
        type='text' required
        name='name'
        placeholder='Beer Name' />
        <input className='form-control'
        defaultValue={props.keg.brand}
        type='text' required
        name='brand'
        placeholder='Brewer' />
        <input className='form-control'
        defaultValue={props.keg.price}
        type='text' required
        name='price'
        placeholder='Price (per Pint)' />
        <input className='form-control'
        defaultValue={props.keg.abv}
        type='text' required
        name='abv'
        placeholder='Alcohol by Volume (abv)' />
        <input className='form-control'
        defaultValue={props.keg.pintsLeft}
        type='number' required
        min='0'
        name='pintsLeft'
        placeholder='Pints Remaining in Keg' />
        <button type='submit' className='btn btn-warning'>Save Changes</button>
      </form> :
      <form onSubmit={props.handleKegFormSubmission} className='form-group'>
        <input className='form-control'
        type='text' required
        name='name'
        placeholder='Beer Name' />
        <input className='form-control'
        type='text' required
        name='brand'
        placeholder='Brewer' />
        <input className='form-control'
        type='text' required
        name='price'
        placeholder='Price (per Pint)' />
        <input className='form-control'
        type='text' required
        name='abv'
        placeholder='Alcohol by Volume (abv)' />
        <input className='form-control'
        type='number' required
        min='0'
        name='pintsLeft'
        placeholder='Pints Remaining in Keg' />
        <button type='submit' className='btn btn-warning'>Save New Keg</button>
      </form>}
    </>
  );
}

ReusableForm.propTypes = {
  keg: PropTypes.object,
  handleKegFormSubmission: PropTypes.func
};

export default ReusableForm;