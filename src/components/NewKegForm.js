import React from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {

  function handleNewKegSubmission(event){
    event.preventDefault();
    props.onKegAdd({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, pintsLeft: parseInt(event.target.pintsLeft.value), id: v4()});
  }

  return (
    <>
      <ReusableForm handleKegFormSubmission={handleNewKegSubmission} />
    </>
  );
}

NewKegForm.propTypes = {
  onKegAdd: PropTypes.func
}

export default NewKegForm;