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
    <div className="flex items-center justify-center h-screen">
      <div className="font-sans text-black flex-col flex items-center bg-indigo-400 bg-opacity-10 border shadow rounded-lg p-3 w-1/3 h-auto max-h-2/3">
        <h1 className="p-5 text-lg font-bold">Todo App</h1>
          <div className="text-black flex items-center bg-white rounded-lg mb-2">
            <label>Title:</label>
            <input
	      className="flex-1 bg-transparent p-3 outline-none"
              type="text"
              id="title"
              name="title"
              placeholder="Enter the title"
              value={input}
              onChange={handleChange}
            ></input>
          </div>
          <button
	    className="block focus:outline-none text-black w-full rounded bg-white p-2"
            onClick={addTodo}
          >
            Add
          </button>
        
        <div className="flex flex-col divide-y w-full">
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
