import { useCallback, useEffect, useRef } from 'react';
import api, { Todo } from '../api/Api';

import {
  useToDoContext,
  useToDoDispatchContext,
} from '../pages/ToDoPage/components/ToDoContext/ToDoContext';

const useTodos = () => {
  const setTodos = useToDoDispatchContext();
  const todo = useToDoContext();

  const loadingRef = useRef(false);

  const getTodos = async () => {
    if (!setTodos || loadingRef.current) return;
    loadingRef.current = true;
    const { data } = await api.getTodos();
    setTodos(data);
    loadingRef.current = false;
  };

  useEffect(() => {
    getTodos();
  }, []);

  return { data: todo };
};

const useToDosDispatch = () => {
  const setTodos = useToDoDispatchContext();

  const deleteTodo = useCallback(async (todoId: number) => {
    if (!setTodos) return;
    await api.deleteTodo(todoId);
    setTodos((prev) => prev.filter(({ id }) => id !== todoId));
  }, []);

  const createTodo = useCallback(async (todo: string) => {
    if (!setTodos) return;
    const { data } = await api.createTodo({ todo });
    setTodos((prev) => prev.concat(data));
  }, []);

  const updateTodo = useCallback(
    async (todoId: number, payload: Pick<Todo, 'todo' | 'isCompleted'>) => {
      if (!setTodos) return;
      const { data } = await api.updateTodo(todoId, payload);
      console.log(data);
      setTodos((prev) => {
        const idx = prev.findIndex((todo) => todo.id === todoId);
        console.log(idx);
        if (idx === -1) return prev;
        const copy = prev.slice();
        copy[idx] = data;
        return copy;
      });
    },
    [],
  );

  const updateCheck = useCallback(
    async (todoId: number, payload: Pick<Todo, 'todo' | 'isCompleted'>) => {
      api.updateTodo(todoId, payload);
    },
    [],
  );

  return { deleteTodo, createTodo, updateTodo, updateCheck };
};

export { useTodos, useToDosDispatch };
