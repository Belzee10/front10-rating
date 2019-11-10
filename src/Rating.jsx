import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const renderFunc = (fn, args) => {
  return fn && typeof fn === 'function' ? fn(args) : null;
};

const renderItemType = ({
  index,
  value,
  width,
  height,
  color,
  emptyColor,
  renderFullItem,
  renderEmptyItem,
  renderHalfItem,
  onClick
}) => {
  const valueFloor = Math.floor(value);
  const valueCeil = Math.ceil(value);
  const isInteger = valueFloor === value;
  let colorValue = '';
  let colorEmpty = '';

  if (index <= valueFloor) {
    colorValue = color;
    colorEmpty = color;
    return renderFunc(renderFullItem, { index });
  }
  if (index > valueFloor) {
    colorValue = emptyColor;
    colorEmpty = emptyColor;
    if (index === valueCeil && !isInteger) {
      colorValue = color;
      return renderFunc(renderHalfItem, { index });
    }
    return renderFunc(renderEmptyItem, { index });
  }

  return (
    <Item
      key={index}
      color={colorValue}
      emptyColor={colorEmpty}
      width={width}
      height={height}
      onClick={() => onClick(index)}
    />
  );
};

const Rating = props => {
  const { starsLength, renderItem, className, style } = props;
  const array = new Array(starsLength).fill();
  return (
    <div className={className} style={style}>
      {array.map((_, index) =>
        renderItem && typeof renderItem === 'function'
          ? renderItem(index)
          : renderItemType({ ...props, index: index + 1 })
      )}
    </div>
  );
};

Rating.propTypes = {
  /**
   * Total of items to show
   */
  starsLength: PropTypes.number,
  /**
   * Rating value
   */
  value: PropTypes.number,
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
  /**
   * Function to render the Items
   */
  renderItem: PropTypes.func,
  /**
   * Function to render the marked items
   */
  renderFullItem: PropTypes.func,
  /**
   * Function to render the unmarked Items
   */
  renderEmptyItem: PropTypes.func,
  /**
   * Function to render the half items
   */
  renderHalfItem: PropTypes.func,
  /**
   * Function to handle rate on key press
   */
  onClick: PropTypes.func,
  /**
   * className applied to the component
   */
  className: PropTypes.string,
  /**
   * inline styles applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any)
};

Rating.defaultProps = {
  starsLength: 5,
  value: 0,
  width: '16',
  height: '16',
  color: '#ffc107',
  emptyColor: '#eceff1',
  renderItem: null,
  renderFullItem: null,
  renderEmptyItem: null,
  renderHalfItem: null,
  onClick: () => {},
  className: '',
  style: null
};

export default Rating;
