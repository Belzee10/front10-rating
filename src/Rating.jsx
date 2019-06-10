import React from 'react';
import PropTypes from 'prop-types';
import '../assets/style.css';

import Item from './Item';

const renderItemType = (
  allowRate,
  index,
  value,
  renderFullItem,
  renderEmptyItem,
  renderHalfItem,
  onKeyPress,
  onClick
) => {
  let icon = '';
  const roundedValue = Math.ceil(value);
  if (index <= roundedValue) {
    if (index === roundedValue && value !== roundedValue) {
      if (renderHalfItem && typeof renderHalfItem === 'function') return renderHalfItem(index);
      icon += 'icon-star-half';
    } else {
      if (renderFullItem && typeof renderFullItem === 'function') return renderFullItem(index);
      icon = 'icon-star-full';
    }
  } else {
    if (renderEmptyItem && typeof renderEmptyItem === 'function') return renderEmptyItem(index);
    icon = 'icon-star-empty';
  }
  return (
    <Item
      key={index}
      icon={icon}
      allowRate={allowRate}
      onClick={onClick(index)}
      onKeyPress={onKeyPress(index)}
    />
  );
};

const Rating = ({
  allowRate,
  starsLength,
  value,
  renderItem,
  renderFullItem,
  renderEmptyItem,
  renderHalfItem,
  onKeyPress,
  onClick,
  className,
  style
}) => {
  let items = [];
  for (let index = 0; index < starsLength; index += 1) {
    const itemToRender =
      renderItem && typeof renderItem === 'function'
        ? renderItem(index)
        : renderItemType(
            allowRate,
            index + 1,
            value,
            renderFullItem,
            renderEmptyItem,
            renderHalfItem,
            onKeyPress,
            onClick
          );
    items = [...items, itemToRender];
  }
  return (
    <div className={`fr-rating-container ${className}`} style={style}>
      {items}
    </div>
  );
};

Rating.propTypes = {
  /**
   * Allow to rate
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
  onKeyPress: PropTypes.func,
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
  allowRate: false,
  starsLength: 5,
  value: 0,
  renderItem: null,
  renderFullItem: null,
  renderEmptyItem: null,
  renderHalfItem: null,
  onKeyPress: null,
  onClick: null,
  className: '',
  style: null
};

export default Rating;
