import React from 'react';
import { Todo } from '../../../../api/Api';
import useInput from '../../../../hooks/useInput';
import { useToDosDispatch } from '../../../../hooks/useTodo';

const ToDoEditItem = ({
  todo,
  id,
  isCompleted,
  handleEdit,
}: ToDoEditItemProps) => {
  const { value, onChange } = useInput(todo);
  const { updateTodo } = useToDosDispatch();

  const handleClickConfirm = () => {
    updateTodo(id, { todo: value, isCompleted });
    handleEdit();
  };

  return (
    <>
      <div>
        <input onChange={onChange} value={value} />
      </div>
      <div>
        <button onClick={handleClickConfirm}> 제출</button>
        <button onClick={handleEdit}> 취소</button>
      </div>
    </>
  );
};

export default React.memo(ToDoEditItem);

type ToDoEditItemProps = {
  handleEdit: () => void;
} & Pick<Todo, 'id' | 'todo' | 'isCompleted'>;
