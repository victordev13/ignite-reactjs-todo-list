import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from 'uuid';
import './global.css';
import { ITask } from './types';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddNewTask = (content: string) => {
    const newTask: ITask = {
      uuid: uuidv4(),
      content,
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

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.wrapper}>
        <NewTask onAddNewTask={handleAddNewTask} />
        <TaskList tasks={tasks} onChangeCompleted={handleChangeCompleted} />
      </main>
    </div>
  );
}

export default App;
