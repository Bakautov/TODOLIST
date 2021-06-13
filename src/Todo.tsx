import React from "react";
import { ITodo } from "./TodoPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  todo: ITodo;
  deleteTodo: Function;
}

const Todo = ({ todo, deleteTodo }: IProps) => {
  return (
    <div className="flex w-full items-center p-5">
      <span className="">{todo.title}</span>
	<div className="flex-grow"></div>
	<FontAwesomeIcon
	className="cursor-pointer fill-current text-red-300 hover:text-red-400"
        onClick={() => {
          deleteTodo(todo.title);
        }}
        icon={faTrashAlt}
      />
    </div>
  );
};

export default Todo;
