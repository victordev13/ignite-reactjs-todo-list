import styles from './styles.module.css';

interface Props {
  total: number;
  completed: number;
}

function Header({ total, completed }: Props) {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.blue}>Tarefas Criadas</p>
        <span className={styles.badge}>{total}</span>
      </div>
      <div>
        <p className={styles.purple}>Concluídas</p>
        <span className={styles.badge}>
          {completed === 0 ? completed : `${completed} de ${total}`}
        </span>
      </div>
    </header>
  );
}

export default Header;
