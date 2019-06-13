import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ icon, onClick, onKeyPress, allowRate }) => {
  return allowRate ? (
    <i
      className={`fr-rating-item ${icon} fr-cursor-pointer`}
      onClick={onClick}
      onKeyPress={onKeyPress}
      role="button"
      tabIndex="0"
    />
  ) : (
    <i className={`fr-rating-item ${icon}`} />
  );
};

Item.propTypes = {
  /**
   * Allow to rate
   */
  allowRate: PropTypes.bool,
  /**
   * Icon to render
   */
  icon: PropTypes.string,
  /**
   * OnClick func to rate
   */
  onClick: PropTypes.func,
  /**
   * OnClick func to rate
   */
  onKeyPress: PropTypes.func
};

Item.defaultProps = {
  icon: 'icon-star-empty',
  allowRate: false,
  onClick: () => {},
  onKeyPress: () => {}
};

export default Item;
