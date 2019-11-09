import React from 'react';
import PropTypes from 'prop-types';

import Star from '../assets/star.svg';

const Item = ({ icon, onClick, onKeyPress, allowRate }) => {
  const iconMapper = {
    star: Star
  };
  // return allowRate ? (
  //   <i
  //     className={`${icon}`}
  //     onClick={onClick}
  //     onKeyPress={onKeyPress}
  //     role="button"
  //     tabIndex="0"
  //   />
  // ) : (
  //   <i className={`${icon}`} />
  // );
  const Icon = iconMapper[icon];
  return <Icon height="50" width="50" color="red" fill="red" />;
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
