import React from 'react';
import styled from 'styled-components';
import ToDoItem from './components/ToDoItem/ToDoItem';
import * as S from './ToDoPage.style';
const ToDoPage = () => {
  return (
    <ToDoPageWrapper>
      <h1>ToDo</h1>
      <input /> <button>추가</button>
      <ul>
        <ToDoItem id={1} todo={'할일'} isCompleted={false} userId={1} />
      </ul>
    </ToDoPageWrapper>
  );
};

export default ToDoPage;

const ToDoPageWrapper = styled.div`
  padding: 40px;
`;
