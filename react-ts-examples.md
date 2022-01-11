# React Typescipt Examples

[React-TypeScipt Cheat Sheet](https://github.com/typescript-cheatsheets/react)

## UseState - todo example

```tsx
import { useState } from "react";
import Input from "./InputForm";
import TodoList from "./TodoList";

export interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

const MainContent = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: string): void => {
    if (todo.trim() === "") {
      return;
    }
    const newTodo: TodoType = {
      id: Date.now(),
      text: todo,
      done: false
    };
    setTodos([...todos, newTodo]);
  };

  const toogleStatus = (id: number): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="flex-1 flex items-center">
      <div className="flex-1 mx-2 md:mx-8 bg-slate-50 rounded shadow-md p-3">
        <Input handleSubmit={addTodo} />
        <TodoList todos={todos} toogleStatus={toogleStatus} />
      </div>
    </div>
  );
};

export default MainContent;
```

- Input Component - handle submit

```tsx
import { useState } from "react";

type InputProps = {
  handleSubmit: (value: string) => void;
};

const Input = ({ handleSubmit }: InputProps) => {
  const [value, setValue] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="sticky top-0">
      <input
        type="text"
        className="t-input"
        placeholder="Add Todo..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
```

- TodoList component

```tsx
import { TodoType } from ".";
import Todo from "./Todo";

type TodoListProps = {
  todos: TodoType[];
  toogleStatus: (id: number) => void;
};

const TodoList = ({ todos, toogleStatus }: TodoListProps) => {
  return (
    <div className="mt-2 h-[70vh] overflow-y-auto">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toogleStatus={() => toogleStatus(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
```

## UseContext

- Create a `store.ts` file in `/src`

```tsx
import { createContext } from "react";

const initialState = {
  first: "Sushil",
  last: "Kamble"
};

export type UserState = typeof initialState;

const context = createContext<UserState>(initialState);

export default context;
```

- Create a component which is going to use the context

```tsx
import UserContext, { UserState } from "../../store";
import { useContext, useState } from "react";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <p>First Name: {user.first}</p>
      <p>Last Name: {user.last}</p>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Sanjay",
    last: "Kamble"
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        className="t-btn bg-primary text-white"
        onClick={() =>
          setUser({
            first: "Sushil",
            last: "Kamble"
          })
        }
      >
        Change Name
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
```

- Finally, Import the Component in the app

```tsx
import UseContextComponent from "./useContextComponent";

const MainContent = () => {
  return (
    <div>
      <h1>This is main content</h1>
      <UseContextComponent />
    </div>
  );
};

export default MainContent;
```

### Example of UseContext

- Counter Array App

```tsx
import { createContext } from "react";

const initialState: number[] = [];

export type CounterArrayState = typeof initialState;

const context = createContext<CounterArrayState>(initialState);

export default context;
```

```tsx
import UserContext, { CounterArrayState } from "../../store";
import { useContext, useState } from "react";

function ConsumerComponent() {
  const counter = useContext<CounterArrayState>(UserContext);

  return (
    <ul className="flex flex-wrap">
      {counter.map((item, idx) => (
        <li key={idx} className="mr-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

function UseContextComponent() {
  const [counterArray, setCounterArray] = useState<CounterArrayState>([]);

  return (
    <UserContext.Provider value={counterArray}>
      <ConsumerComponent />
      <button
        className="t-btn bg-primary text-white"
        onClick={() =>
          setCounterArray([...counterArray, counterArray.length + 1])
        }
      >
        Add to the list
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
```
