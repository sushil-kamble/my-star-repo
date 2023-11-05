import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const jsonData = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await jsonData.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const toggleTodo = (id: number) => {
    const data = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(data);
  };
  return (
    <div>
      <h2>Here is the list on my todos</h2>
      <TodoInput />
      {todos.map((todo) => (
        <h3
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          className={`cursor-pointer w-fit 
          ${todo.completed ? "line-through" : ""}`}
        >
          {todo.title}
        </h3>
      ))}
    </div>
  );
};
export default Todos;
