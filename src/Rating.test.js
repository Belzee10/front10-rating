import React from 'react';
import { jest } from 'jest';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Rating from './Rating';

afterEach(cleanup);

test('Testing functionalities', async () => {
  const renderFullItem = jest.fn();
  const renderItem = jest.fn();
  const renderEmptyItem = jest.fn();
  const renderHalfItem = jest.fn();
  const onKeyPress = jest.fn();
  const onClick = jest.fn();
  const { getAllByRole, container, asFragment } = render(
    <Rating
      allowRate
      starsLength={5}
      value={3}
      renderItem={renderItem}
      renderFullItem={renderFullItem}
      renderEmptyItem={renderEmptyItem}
      renderHalfItem={renderHalfItem}
      onKeyPress={onKeyPress}
      onClick={onClick}
    />
  );
  const items = await waitForElement(() => getAllByRole('button'));

  // snapshots work great with regular DOM nodes!
  expect(container.firstChild).toMatchSnapshot();
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  expect(asFragment()).toMatchSnapshot();
});
