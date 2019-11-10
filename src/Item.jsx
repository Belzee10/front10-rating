import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, width, height, color, emptyColor, cursor }) => {
  return (
    <svg
      cursor={cursor}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      onClick={onClick}
    >
      <path
        d="m23.79 9.87-5.36 5.49 1.26 7.77c.111.62-.562 1.074-1.1.78l-6.59-3.65v-20.23c.28 0 .56.13.68.4l3.31 7.05 7.37 1.12c.616.11.843.835.43 1.27z"
        fill={emptyColor}
      />
      <path
        d="m12 .03v20.23l-6.59 3.65c-.529.297-1.212-.153-1.1-.78l1.26-7.77-5.36-5.49c-.413-.435-.187-1.16.43-1.27l7.37-1.12 3.31-7.05c.12-.27.4-.4.68-.4z"
        fill={color}
      />
    </svg>
  );
};

Item.propTypes = {
  /**
   * OnClick func to rate
   */
  onClick: PropTypes.func,
  /**
   * width of the icon
   */
  width: PropTypes.string,
  /**
   * height of the icon
   */
  height: PropTypes.string,
  /**
   * color of the icon
   */
  color: PropTypes.string,
  /**
   * color of the empty icon
   */
  emptyColor: PropTypes.string,
  cursor: PropTypes.oneOf(['pointer', 'default'])
};

Item.defaultProps = {
  width: '16',
  height: '16',
  color: '#ffc107',
  emptyColor: '#eceff1',
  cursor: 'default',
  onClick: () => {}
};

export default Item;
