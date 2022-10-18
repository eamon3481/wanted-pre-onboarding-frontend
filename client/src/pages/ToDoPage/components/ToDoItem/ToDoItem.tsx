import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../../../../api/Api';
import ToDoEditItem from '../ToDoEditItem/ToDoEditItem';

const ToDoItem = ({ todo, id, isCompleted }: Todo) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCheck, setIsCheck] = useState(isCompleted);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleCheckChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsCheck((prev) => !prev);
    },
    [],
  );

  if (isEdit) {
    return (
      <ToDoItemWrapper>
        <ToDoEditItem {...{ todo, id, handleEdit }} />
      </ToDoItemWrapper>
    );
  }
  return (
    <ToDoItemWrapper>
      <div>
        <input type="checkbox" onChange={handleCheckChange} checked={isCheck} />
        <span>{todo}</span>
      </div>
      <div>
        <button onClick={handleEdit}> 수정</button>
        <button> 삭제</button>
      </div>
    </ToDoItemWrapper>
  );
};

export default ToDoItem;

const ToDoItemWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
