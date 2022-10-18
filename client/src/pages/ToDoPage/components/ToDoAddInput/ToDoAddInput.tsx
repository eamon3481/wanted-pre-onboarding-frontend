import React from 'react';
import styled from 'styled-components';
import useInput from '../../../../hooks/useInput';
import { useToDosDispatch } from '../../../../hooks/useTodo';

const ToDoAddInput = () => {
  const { value, onChange, reset } = useInput('');
  const { createTodo } = useToDosDispatch();

  const handleAddClick = () => {
    createTodo(value);
    reset();
  };

  return (
    <ToDoInputWrapper>
      <input
        type="text"
        name="add-todo"
        placeholder="일정을 추가해 주세요"
        value={value}
        onChange={onChange}
      />
      <button onClick={handleAddClick}>추가</button>
    </ToDoInputWrapper>
  );
};

export default ToDoAddInput;

const ToDoInputWrapper = styled.div``;
