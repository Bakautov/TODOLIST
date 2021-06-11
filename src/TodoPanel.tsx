import React from "react";
import { useState } from "react";
import Todo from "./Todo";

export interface ITodo {
  title: String;
}

function TodoPanel() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [input, setInput] = useState<string>("");
 
  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const addTodo = (event: any) => {
    event?.preventDefault();
    setTodos([...todos, { title: input }]);
    setInput("");
  };

  return (
    <div>
      <div>
        <h1>Todo App</h1>
          <div>
            <label>Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter the title"
              value={input}
              onChange={handleChange}
            ></input>
          </div>
          <button
            onClick={addTodo}
          >
            Add
          </button>
        
        <div>
          {todos.map((item) =>
            <Todo
            todo={item}
            ></Todo>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default TodoPanel;
