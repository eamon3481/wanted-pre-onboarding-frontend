import React from 'react';
import { useTodos } from '../../../../hooks/useTodo';
import ToDoAddInput from '../ToDoAddInput/ToDoAddInput';
import ToDoItem from '../ToDoItem/ToDoItem';

export const ToDoList = () => {
  const { data } = useTodos();
  console.log(data);

  return (
    <>
      <ToDoAddInput />
      <ul>
        {data && data.map((todos) => <ToDoItem key={todos.id} {...todos} />)}
      </ul>
    </>
  );
};
