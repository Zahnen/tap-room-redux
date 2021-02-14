import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return(
    <>
    <div className ="d-flex flex-row flex-wrap my-flex-container">
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked = {props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          id={keg.id}
          key={keg.id}
          pintsLeft={keg.pintsLeft} />
      )}
    </div>
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;