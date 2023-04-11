import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from 'uuid';
import './global.css';
import { ITask, Time } from './types';
import Storage from './infra/storage';
import { formatTime } from './utils/time';

function App() {
  const [tasks, setTasks] = useState<ITask[]>(
    () => Storage.getItem('tasks', []),
  );

  const handleAddNewTask = (content: string, time?: Time) => {
    const now = new Date();
    if (time && formatTime(time) < now.getHours() + ':' + now.getMinutes()) {
      alert("Horário deve ser maior ou igual ao atual");
      return;
    }

    const newTask: ITask = {
      uuid: uuidv4(),
      content,
      time,
      isCompleted: false,
    };

    setTasks((current) => [newTask, ...current]);
  };

  const handleChangeCompleted = (uuid: string, isCompleted: boolean) => {
    const currentTasks = tasks.map((task) => {
      if (task.uuid !== uuid) {
        return task;
      }

      return { ...task, isCompleted };
    });

    setTasks(currentTasks);
  };

  const handleRemoveTask = (uuid: string) => {
    setTasks(tasks.filter((task) => task.uuid !== uuid));
  };

  useEffect(() => {
    Storage.saveItem('tasks', tasks)
  }, [tasks]);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.wrapper}>
        <NewTask onAddNewTask={handleAddNewTask} />
        <TaskList
          tasks={tasks}
          onChangeCompleted={handleChangeCompleted}
          onRemoveTask={handleRemoveTask}
        />
      </main>
    </div>
  );
}

export default App;
