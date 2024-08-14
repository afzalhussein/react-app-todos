import React, { useEffect, useState } from "react";
import { getRiverInformation } from "../../services/rivers";
import PropTypes from "prop-types";

export default function RiverInformation({ name }) {
  const [riverInformation, setRiverInformation] = useState();
  useEffect(() => {
    let mounted = true;
    getRiverInformation(name).then((data) => {
      if (mounted) setRiverInformation(data);
    } );
    return () => {
      mounted = false;
    }
  }, [name]);

  return (
    <div className="wrapper">
      <h2>River Information</h2>

      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length; {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </div>
  );
}

RiverInformation.propTypes = {
  name: PropTypes.string.isRequired,
};
