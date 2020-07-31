import React, { useState } from 'react';
import { addTask } from '../ducks/todo/module';
import { useDispatch } from 'react-redux';

const TaskInput: React.FC = () => {
  const dispatch = useDispatch();

  const [inputTitle, setInputTitle] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTask(inputTitle));
    setInputTitle('');
  };

  return (
    <div>
      <div>
        <input type='text' value={inputTitle} onChange={handleInputChange} />
        <button onClick={handleSubmit}>追加</button>
      </div>
    </div>
  );
};

export default TaskInput;
