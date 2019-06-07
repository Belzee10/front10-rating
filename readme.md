**front10-rating** is a simple and tiny rating component that you can customize via [renderProps](https://facebook.github.io/render-props.html).

### Installation

//TODO

### Examples

#### Basic

```
import React from "react";
import Rating from "front10-rating";

const App = () => {
    return (
        <Rating value={2.5} />
    )
}
```

//TODO: image

#### Custom render

```
import React from "react";
import Rating from "front10-rating";

const App = () => {
    return (
        <Rating
            value={3}
            renderFullItem={(i) => <span key={i}>🍎</span>}
            renderEmptyItem={(i) => <span key={i}>🍏</span>} />
    )
}
```

//TODO: image

#### With some styles

```
import React from "react";
import Rating from "front10-rating";

const App = () => {
    return (
        <Rating value={4} className="text-purple bg-white font-size-6" />
    )
}
```

//TODO: image

### List of props

| Property        | Type     | Default | Description                            |
| --------------- | -------- | ------- | -------------------------------------- |
| starsLength     | number   | 5       | Total of items to show                 |
| value           | number   | 0       | Rating value                           |
| renderItem      | function | null    | Function to render the Items           |
| renderFullItem  | function | null    | Function to render the marked items    |
| renderEmptyItem | function | null    | Function to render the unmarked Items  |
| renderHalfItem  | function | null    | Function to render the half items      |
| className       | string   | ''      | className applied to the component     |
| style           | object   | null    | inline styles applied to the component |
