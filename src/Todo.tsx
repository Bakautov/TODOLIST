import React from "react";
import { ITodo } from "./TodoPanel";

interface IProps {
  todo: ITodo;
}

const Todo = ({ todo }: IProps) => {
  return (
    <div className="flex w-full items-center p-5">
      <span className="">{todo.title}</span>
    </div>
  );
};

export default Todo;
