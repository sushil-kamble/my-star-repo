# React Router

`npm install react-router-dom`

## Quicklook

```jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import Details and Home page
<Router>
  <Switch>
    <Route path="/details/:id">
      <Details />
    </Route>
    <Route path="/">
      <SearchParams />
    </Route>
  </Switch>
</Router>;
```

- The `:id` part is a variable. In `/details/1`, `1` would be the variable.
- `Switch` - Renders one page at a time

```jsx
import { Link } from "react-router-dom";

<Link to={`/details/${id}`}>[…]</Link>;
```

- If `id` is `1` then it will go to `/details/1`
- If you want to access that `id` use `Params`

```jsx
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
```

- `useHistory` for programatic routing

```jsx
const history = useHistory();
```

- Now use `history.push('/)`
