import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditKegForm (props) {
  const {keg} = props;

  function handleEditingKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, pintsLeft: parseInt(event.target.pintsLeft.value), id: keg.id});
  }

  return (
    <>
    <ReusableForm handleKegFormSubmission={handleEditingKegFormSubmission} />
    </>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

  export default EditKegForm;