import React from "react";
import PropTypes from "prop-types";

import Item from "./Item";

const renderItems = ({ starsLength, renderStar, ...props }) => {
  let items = [];
  for (let i = 0; i < starsLength; i += 1) {
    const itemToRender = renderStar ? (
      renderStar()
    ) : (
      <Item key={i} {...props} />
    );
    items = [...items, itemToRender];
  }
  return items;
};

const Rating = props => {
  return renderItems(props);
};

Rating.propTypes = {
  starsLength: PropTypes.number,
  value: PropTypes.number,
  renderStar: PropTypes.func
};

Rating.defaultProps = {
  starsLength: 5,
  value: 2,
  renderStar: null
};

export default Rating;
