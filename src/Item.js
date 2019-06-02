import React from "react";
import PropTypes from "prop-types";

const Item = ({ icon, content }) => {
  return icon ? <i className={icon} /> : <span>{content}</span>;
};

Item.propTypes = {
  /**
   * Icon to render
   */
  icon: PropTypes.string,
  /**
   * Content to render
   */
  content: PropTypes.content
};

Item.defaultProps = {
  icon: "", //TODO: default icon
  content: "★"
};

export default Item;
