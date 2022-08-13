import styles from './App.module.css'
import Header from './components/Header';
import NewTask from './components/NewTask';
import './global.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.wrapper}>
        <NewTask />
      </main>
    </div>
  )
}

export default App
