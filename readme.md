**front10-rating** is a simple and tiny rating component that you can customize via [renderProps](https://reactjs.org/docs/render-props.html).

### Installation

`npm install --save front10-rating`

### Examples

#### Basic

```jsx
import React from 'react';
import Rating from 'front10-rating';

const App = () => {
  return <Rating value={2.5} />;
};
```

![Basic example](https://res.cloudinary.com/dombtm0fe/image/upload/v1559924999/Screenshot_from_2019-06-07_12-27-16.png)

#### Custom render

```jsx
import React from 'react';
import Rating from 'front10-rating';

const App = () => {
  return (
    <Rating
      value={3}
      renderFullItem={i => <span key={i}>🍎</span>}
      renderEmptyItem={i => <span key={i}>🍏</span>}
    />
  );
};
```

![Custom render](https://res.cloudinary.com/dombtm0fe/image/upload/v1559925291/Screenshot_from_2019-06-07_12-31-05.png)

#### With some styles

```jsx
import React from 'react';
import Rating from 'front10-rating';

const App = () => {
  return <Rating value={4} className="text-purple bg-white font-size-6" />;
};
```

![With some styles](https://res.cloudinary.com/dombtm0fe/image/upload/v1559925306/Screenshot_from_2019-06-07_12-32-52.png)

### List of props

| Property        | Type     | Default | Description                            |
| --------------- | -------- | ------- | -------------------------------------- |
| allowRate       | bool     | false   | Allow to rate                          |
| starsLength     | number   | 5       | Total of items to show                 |
| value           | number   | 0       | Rating value                           |
| renderItem      | function | null    | Function to render the Items           |
| renderFullItem  | function | null    | Function to render the marked items    |
| renderEmptyItem | function | null    | Function to render the unmarked Items  |
| renderHalfItem  | function | null    | Function to render the half items      |
| onKeyPress      | function | null    | Function to handle rate on key press   |
| onClick         | function | null    | Function to handle rate on click       |
| className       | string   | ''      | className applied to the component     |
| style           | object   | null    | inline styles applied to the component |
