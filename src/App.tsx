import styles from './App.module.css'
import Header from './components/Header';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import './global.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.wrapper}>
        <NewTask />
        <TaskList />
      </main>
    </div>
  )
}

export default App
