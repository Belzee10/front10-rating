import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ icon }) => {
  return <i className={`item ${icon}`} />;
};

Item.propTypes = {
  /**
   * Icon to render
   */
  icon: PropTypes.string
};

Item.defaultProps = {
  icon: 'icon-star-empty'
};

export default Item;
