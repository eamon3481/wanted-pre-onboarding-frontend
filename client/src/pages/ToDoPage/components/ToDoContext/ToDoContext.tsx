import React, { createContext, useContext, useMemo, useState } from 'react';
import { Todo } from '../../../../api/Api';

const ToDoContext = createContext<Todo[] | null>(null);
const ToDoDispatchContext = createContext<React.Dispatch<
  React.SetStateAction<Todo[]>
> | null>(null);

export const ToDoProvider = ({ children }: ToDoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const memoSetTodos = useMemo(() => setTodos, []);
  return (
    <ToDoContext.Provider value={todos}>
      <ToDoDispatchContext.Provider value={memoSetTodos}>
        {children}
      </ToDoDispatchContext.Provider>
    </ToDoContext.Provider>
  );
};

type ToDoProviderProps = { children: JSX.Element };

export const useToDoContext = () => useContext(ToDoContext);
export const useToDoDispatchContext = () => useContext(ToDoDispatchContext);
