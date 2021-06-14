import React from "react";
import { useState } from "react";
import Todo from "./Todo";

export interface ITodo {
  title: string;
  finished: boolean;
  id: number;
}

function TodoPanel() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [input, setInput] = useState<string>("");

  const [hidefinished, setHidefinished] = useState<boolean>(false);
 
  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const deleteTodo = (title: string) => {
  setTodos(todos.filter((todo) => todo.title !== title));
  };

  const addTodo = (event: any) => {
    event?.preventDefault();
    if (todos.some((item: ITodo) => item.title === input) || !input) return;
    setTodos([...todos, { title: input, finished: false, id: todos.length+1}]);
    setInput("");
  };

  const finishTodo = (title: string) => {
    setTodos(
    todos.map((item: ITodo) => ({ title: item.title, finished: item.title === title ? !item.finished : item.finished, id: item.id }))); 
    };

    const toggleHideFinished = () => {
      setHidefinished(!hidefinished);
    };

  return (
    <div className="flex items-center justify-center h-screen bg-image">
      <div className="font-sans text-black flex-col flex items-center bg-indigo-400 bg-opacity-10 border shadow rounded-lg p-3 w-1/3 h-auto max-h-2/3">
      <form action="" className="w-3/4 mb-5">
        <h1 className="p-5 text-center text-lg font-bold">Todo App</h1>
          <div className="text-black flex items-center bg-white rounded-lg mb-2">
            <label className = "mx-4">Title:</label>
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
          </form>
          { hidefinished ? (
          <button
            className="block focus:outline-none text-black w-3/4 rounded bg-blue-200 bg-opacity-20 p-2"
            onClick={toggleHideFinished}
          >
            Hide Finished
          </button>
        ) : (
          <button
            className="block focus:outline-none text-black w-3/4 rounded bg-white p-2"
            onClick={toggleHideFinished}
          >
            Hide Finished
          </button>
        )}
        <div className="flex flex-col divide-y w-full overflow-y-scroll">
        {todos.map((item) =>
            hidefinished ? (
              !item.finished ? (
                <Todo
                  todo={item}
                  finishTodo={finishTodo}
                  deleteTodo={deleteTodo}
                  key = {item.id}
                ></Todo>
              ) : null
            ) : (
              <Todo
                todo={item}
                finishTodo={finishTodo}
                deleteTodo={deleteTodo}
                key = {item.id}
              ></Todo>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoPanel;
