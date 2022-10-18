import React, { useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../../../../api/Api';
import ToDoEditItem from '../ToDoEditItem/ToDoEditItem';

const ToDoItem = ({ todo, id, isCompleted }: Todo) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked = !e.target.checked;
  };

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
        <input
          type="checkbox"
          onChange={handleCheckChange}
          checked={isCompleted}
        />
        <span>할일</span>
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
