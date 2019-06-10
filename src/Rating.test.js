import React from 'react';
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Rating from './Rating';

afterEach(cleanup);

test('Testing Basic', async () => {
  const { container, asFragment } = render(<Rating starsLength={5} value={3} />);

  expect(container.firstChild).toMatchSnapshot();
  expect(asFragment()).toMatchSnapshot();
});
test('Testing functionalities', async () => {
  const onKeyPress = jest.fn();
  const onClick = jest.fn();
  const { getAllByRole, container, asFragment } = render(
    <Rating allowRate starsLength={5} value={3} onKeyPress={onKeyPress} onClick={onClick} />
  );
  const items = await waitForElement(() => getAllByRole('button'));
  expect(items.length).toBe(5);

  fireEvent.click(items[3]);
  fireEvent.keyPress(items[3], { keyCode: 13 });
  expect(onKeyPress).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalled();
  // snapshots work great with regular DOM nodes!
  expect(container.firstChild).toMatchSnapshot();
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  expect(asFragment()).toMatchSnapshot();
});
