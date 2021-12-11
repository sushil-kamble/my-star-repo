# Class Components

## Hello World for class Components

```jsx
import React, {Component} from 'react'

class Details extends Component {
    render() {
        return (
            <h1>Hello world</h1>
        )
    }
}

export default Details
```

## State

```jsx
import React, {Component} from 'react'
import {withRouter} from "react-router-dom";

class Details extends Component {
    constructor() {
        super(); // Always call super
        this.state = { // Similar to data in vue
            loading: true
        }
    }

    async componentDidMount() { // vue mounted
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json(); // we convert the respone into json
        this.setState(Object.assign({loading: false}, json.pets[0]));
    }

    render() {
        return (
            <h1>Hello world</h1>
        )
    }
}

export default withRouter(Details); // Note down here
```

- `componentDidMount` - When component gets initially rendered
- `this.props.match.params.id` - `details/:id` is that `id` what it returns
- `this.setState()` - When you call `setState()`, React merges the object you provide into the current state. Other
  variables intact
- `Object.assign()` - method copies all enumerable own properties from one or more source objects to a target
  object. [Example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- Here after that component will be loaded, state will be

```json5
{
  id: 1,
  name: 'abc',
  images: 'xyz',
  state: 'Mumbai'
}
```

## Counter Example in Class Component

```js
import {Component} from "react";

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className="main-layout">
                <div>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.increment}>Increment</button>
                </div>
            </div>
        )
    }
}

export default CounterClass
```

- Go Through React Lifecycle methods [Here](https://reactjs.org/docs/react-component.html)


