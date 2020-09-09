import React from "react";
import PropTypes from "prop-types";
const Header = ({ showAddToggle }) => {
  return (
    <section className="header">
      <button className="header-btn" onClick={showAddToggle}>
        Add
      </button>
      <h1 className="header-tittle">Todo list</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired
};

export default Header;
