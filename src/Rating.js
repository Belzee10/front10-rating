import React from 'react';
import PropTypes from 'prop-types';
import '../assets/style.css';

import Item from './Item';

const renderItemType = (index, value, renderFullItem, renderEmptyItem) => {
  let icon = '';
  if (index <= value) {
    if (renderFullItem && typeof renderFullItem === 'function')
      return renderFullItem(index);
    icon += 'icon-star-full';
  } else {
    if (renderEmptyItem && typeof renderEmptyItem === 'function')
      return renderEmptyItem(index);
    icon += 'icon-star-empty';
  }
  return <Item key={index} icon={icon} />;
};

const renderItems = ({
  starsLength,
  value,
  renderItem,
  renderFullItem,
  renderEmptyItem
  // ...props
}) => {
  let items = [];
  for (let index = 0; index < starsLength; index += 1) {
    const itemToRender =
      renderItem && typeof renderItem === 'function'
        ? renderItem(index)
        : renderItemType(index + 1, value, renderFullItem, renderEmptyItem);

    items = [...items, itemToRender];
  }
  return items;
};

const Rating = props => {
  return renderItems(props);
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
  renderEmptyItem: PropTypes.func
};

Rating.defaultProps = {
  starsLength: 5,
  value: 0,
  renderItem: null,
  renderFullItem: null,
  renderEmptyItem: null
};

export default Rating;
