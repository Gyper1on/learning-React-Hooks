import React from "react";
import PropTypes from "prop-types";


const SomeComponent = ({ name }) => {
    return <h4>{name || "Component"}</h4>
};
SomeComponent.propTypes = {
    name: PropTypes.string
};
export default SomeComponent
