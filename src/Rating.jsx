import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import './main.css';

const isFunc = fn => {
  return fn && typeof fn === 'function';
};

const renderItemType = ({
  index,
  value,
  width,
  height,
  color,
  emptyColor,
  allowRate,
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
    if (isFunc(renderFullItem)) return renderFullItem({ index });
    colorValue = color;
    colorEmpty = color;
  }
  if (index > valueFloor) {
    colorValue = emptyColor;
    colorEmpty = emptyColor;
    if (index === valueCeil && !isInteger) {
      if (isFunc(renderHalfItem)) return renderHalfItem({ index });
      colorValue = color;
    }
    if (isFunc(renderEmptyItem)) return renderEmptyItem({ index });
  }

  const itemProps = allowRate
    ? {
        cursor: 'pointer',
        onClick: () => onClick(index)
      }
    : {};

  return (
    <Item
      {...itemProps}
      key={index}
      color={colorValue}
      emptyColor={colorEmpty}
      width={width}
      height={height}
    />
  );
};

const Rating = props => {
  const { starsLength, renderItem, value, showValue, className, style } = props;
  const array = new Array(starsLength).fill();
  return (
    <div className={`front10-rating-container ${className}`} style={style}>
      {array.map((_, index) =>
        isFunc(renderItem)
          ? renderItem(index)
          : renderItemType({ ...props, index: index + 1 })
      )}
      {showValue && <span className="front10-rating-value">{value}</span>}
    </div>
  );
};

Rating.propTypes = {
  /**
   * define is show the value of the rating
   */
  showValue: PropTypes.bool,
  /**
   * allow to rate
   */
  allowRate: PropTypes.bool,
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
   * Function to handle rate on click
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
  showValue: false,
  allowRate: false,
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
