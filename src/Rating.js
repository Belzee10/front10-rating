import React from "react";
import PropTypes from "prop-types";

import Item from "./Item";

const renderItems = ({ starsLength, ...props }) => {
  let items = [];
  for (let i = 0; i < starsLength; i += 1) {
    items = [...items, <Item key={i} {...props} />];
  }
  return items;
};

const Rating = props => {
  return renderItems(props);
};

Rating.propTypes = {
  starsLength: PropTypes.number,
  value: PropTypes.number
};

Rating.defaultProps = {
  starsLength: 5,
  value: 2
};

export default Rating;
