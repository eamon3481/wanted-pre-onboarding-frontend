import React, { createContext, useContext, useState } from 'react';
import { Todo } from '../../../../api/Api';

const ToDoContext = createContext<Todo[] | null>(null);
const ToDoDispatchContext = createContext<React.Dispatch<
  React.SetStateAction<Todo[]>
> | null>(null);

export const ToDoProvider = ({ children }: ToDoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <ToDoContext.Provider value={todos}>
      <ToDoDispatchContext.Provider value={setTodos}>
        {children}
      </ToDoDispatchContext.Provider>
    </ToDoContext.Provider>
  );
};

type ToDoProviderProps = { children: JSX.Element };

export const useToDoContext = () => useContext(ToDoContext);
export const useToDoDispatchContext = () => useContext(ToDoDispatchContext);
