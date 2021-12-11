# React

## Use State - Counter Example

```jsx
import {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    };
    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Click me</button>
        </div>
    );
}

export default Counter;
```

## Use State - Two way Data Binding

```jsx
import {useState} from "react";

function Twoway() {
    const [data, setData] = useState("");

    return (
        <div>
            <h1>Two Way Data Binding</h1>
            <input type="text" onChange={e => setData(e.target.value)}/>
            <h1>Data: {data}</h1>
        </div>
    );
}

export default Twoway;

```

## Use State - Submit Form

```jsx
import {useState} from "react";

function FormSubmit() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName);
        setFirstName("");
        setLastName("");
    };

    return (
        <div className="main-layout">
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">
                        First Name:
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            id="firstName"
                        />
                    </label>

                    <br/>
                    <label htmlFor="lastName">
                        Last Name:
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            id="lastName"
                        />
                    </label>

                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default FormSubmit;

```

## Use State - Toggle DOM

```jsx
import {useState} from "react";

function Toggler() {
    const [on, setOn] = useState(false);
    const toggle = () => {
        setOn(!on);
    };
    return (
        <div className="main-layout">
            <div>
                <h1>Toggler</h1>
                <button onClick={toggle}>Toggle</button>
                {on && <h2>I am Visible</h2>}
            </div>
        </div>
    );
}

export default Toggler;

```

## Use Effect - Api Call

- If no parameters are passed in array useEffect only runs at start
- If state is passed, then useEffect will run at start and when the state change

```jsx
import {useEffect, useState} from "react";

function UseEffectInAction() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
    }, []);
    const fetchPosts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();
        setPosts(posts);
    };
    return (
        <div>
            <h1>Use Effect</h1>

            {posts ? (
                posts.map(post => (
                    <div key={post.id}>
                        <span>{post.body}</span>
                    </div>
                ))
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
}

export default UseEffectInAction;

```

## Use Context

- Use case - store login details
- Dark mode of application
- Basically a global state of application

```jsx
import {createContext} from 'react'

const ThemeContext = createContext(["green", () => {
}])
// Second thing in hooks is always for function
// It is just done for typescript support
export default ThemeContext
```

```jsx
// Import ThemeContext & useState
const App = () => {
    const theme = useState("darkblue")
    return (
        <ThemeContext.Provider value={theme}>
            {/* Everything can access the theme  */}
        </ThemeContext.Provider>
    )
}

```

## Vs Code shortcuts

- React Functional Component - `_rfce`