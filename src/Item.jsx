import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ icon, onClick, onKeyPress, allowRate }) => {
  return allowRate ? (
    <i
      className={`${icon}`}
      onClick={onClick}
      onKeyPress={onKeyPress}
      role="button"
      tabIndex="0"
    />
  ) : (
    <i className={`${icon}`} />
  );
  // return <img src={icon} />;
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
  icon: '',
  allowRate: false,
  onClick: () => {},
  onKeyPress: () => {}
};

export default Item;
