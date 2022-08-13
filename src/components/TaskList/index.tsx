import Header from './Header';
import ClipboardIcon from '../../assets/clipboard.svg';

import styles from './styles.module.css';
import Task from '../Task';
import { ITask } from '../../types';

interface Props {
  tasks: ITask[];
  onChangeCompleted: (uuid: string, isCompleted: boolean) => void;
}

function TaskList({ tasks, onChangeCompleted }: Props) {
  return (
    <div className={styles.content}>
      <Header total={tasks.length} completed={tasks.filter(({isCompleted}) => isCompleted).length} />
      <div className={styles.listItems}>
        {tasks.length === 0 ? (
          <div className={styles.emptyList}>
            <img src={ClipboardIcon} width={56} height={56} />
            <div>
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          tasks.map((task) => <Task task={task} onChangeCompleted={onChangeCompleted} key={task.uuid} />)
        )}
      </div>
    </div>
  );
}

export default TaskList;
