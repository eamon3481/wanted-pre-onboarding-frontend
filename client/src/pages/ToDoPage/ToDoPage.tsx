import React from 'react';
import styled from 'styled-components';
import { ToDoProvider } from './components/ToDoContext/ToDoContext';
import { ToDoList } from './components/ToDoList/ToDoList';
import * as S from './ToDoPage.style';
const ToDoPage = () => {
  return (
    <ToDoPageWrapper>
      <h1>ToDo</h1>
      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>
    </ToDoPageWrapper>
  );
};

export default ToDoPage;

const ToDoPageWrapper = styled.div`
  padding: 40px;
`;
