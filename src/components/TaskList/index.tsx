import Header from './Header';
import ClipboardIcon from '../../assets/clipboard.svg';

import styles from './styles.module.css';
import Task from '../Task';

function TaskList() {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.listItems}>
        <div className={styles.emptyList}>
          <img src={ClipboardIcon} width={56} height={56} />
          <div>
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
        <Task />
      </div>
    </div>
  );
}

export default TaskList;
