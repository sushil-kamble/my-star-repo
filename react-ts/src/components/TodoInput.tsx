import { useState } from "react";

function TodoInput() {
  console.log("Render");
  //   const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  //   const handleChange = (value: string) => {
  //     setText(value);
  //     console.log(text);
  //   };
  const handleIncrement = () => {
    setCount((count) => count + 1);
    setCount(count + 5); // Ouput 5 10 15 - count is replaced
    setCount((count) => count + 1);
  };

  return (
    <div className="flex flex-col gap-2">
      Hello This is Todo Input
      {/* {text} */}
      {/* <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      /> */}
      <button className="t-btn" onClick={handleIncrement}>
        Increment
      </button>
      <h2 className="text-lg">{count}</h2>
    </div>
  );
}

export default TodoInput;
