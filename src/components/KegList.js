import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return(
    <>
      {props.kegList.map((keg) =>
        <Keg
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        abv={keg.abv}
        // id={keg.id}
        // key={keg.id}
        pintsLeft={keg.pintsLeft} />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;