import React, { useEffect, useState } from "react";
import { getRiverInformation } from "../../services/rivers";
import PropTypes from "prop-types";

export default function RiverInformation({ name }) {
  const [riverInformation, setRiverInformation] = useState({});
  useEffect(() => {
    getRiverInformation(name).then((data) => {
      setRiverInformation(data);
    });
  }, [name]);

  return (
    <div className="wrapper">
      <h1>World's Longest Rivers</h1>
      <h2>River Information</h2>

      <ul>
        <li>Continent: {riverInformation.continent}</li>
        <li>Length; {riverInformation.length}</li>
        <li>Outflow: {riverInformation.outflow}</li>
      </ul>
    </div>
  );
}

RiverInformation.propTypes = {
  name: PropTypes.string.isRequired,
};
