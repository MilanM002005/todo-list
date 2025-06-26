import { useState, useEffect } from 'react';

const Input = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (newTask.length > 3) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [newTask]);

  function handlesubmit(event) {
    event.preventDefault();
    const value = {
      text: newTask,
      id: Math.random(),
    };
    onAddTask(value);
  }
  return (
    <>
      {/* Typed: {newTask} */}
      <form id="add-task">
        <input
          className="task-input"
          type="text"
          placeholder="Add a new task"
          onChange={event => {
            setNewTask(event.target.value);
          }}
        />
        <button
          className="add-task-button"
          type="submit"
          onClick={handlesubmit}
          disabled={!valid}
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default Input;
