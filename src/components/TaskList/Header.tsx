import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.blue}>Tarefas Criadas</p>
        <span className={styles.badge}>0</span>
      </div>
      <div>
        <p className={styles.purple}>Concluídas</p>
        <span className={styles.badge}>0</span>
      </div>
    </header>
  );
}

export default Header;
