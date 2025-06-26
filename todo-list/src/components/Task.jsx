import { useEffect, useState } from 'react';
import Input from './input';
import Card from './card';
// import Navbar from './Navbar';

const Task = () => {
  const initialTask = [
    // { text: "My first task", id: 0 },
    // { text: "My second task", id: 1 },
    // { text: "My third task", id: 2 }
  ];
  const handleNewTask = async newTask => {
    const body = {
      task_id: newTask.id,
      task_name: newTask.text,
    };
    await fetch('http://localhost:8010', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    await handleGetTasks();
  };

  const handleGetTasks = async () => {
    const response = await fetch(`http://localhost:8010/`);
    const data = await response.json();
    setTaskList(data.map(item => ({ id: item.task_id, text: item.task_name })));
    console.log(data);
  };
  useEffect(() => {
    handleGetTasks();
  }, []);

  const handleDelete = async id => {
    await fetch(`http://localhost:8010/${id}`, {
      method: 'DELETE',
    });
    await handleGetTasks();
  };

  const [taskList, setTaskList] = useState(initialTask);
  return (
    <>
      <header>My Todo List</header>

      <div id="tasks">
        <Input onAddTask={handleNewTask} />

        {taskList.map(task => {
          return <Card props={task} onDelete={handleDelete} />;
        })}
      </div>
    </>
  );
};

export default Task;
