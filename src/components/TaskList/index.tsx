import Header from './Header';
import ClipboardIcon from '../../assets/clipboard.svg';

import styles from './styles.module.css';
import Task from '../Task';
import { ITask } from '../../types';
import Time from '../../utils/time';

interface Props {
  tasks: ITask[];
  onChangeCompleted: (uuid: string, isCompleted: boolean) => void;
  onRemoveTask: (uuid: string) => void;
}

function TaskList({ tasks, onChangeCompleted, onRemoveTask }: Props) {
  const sortedTasks = tasks
    .sort((a, b) => {
      if (!a.time) {
        return -1;
      }

      if (!b.time) {
        return 1;
      }

      return Time.eq(a.time, b.time) ? 1 : -1;
    })

  return (
    <div className={styles.content}>
      <Header
        total={tasks.length}
        completed={tasks.filter(({ isCompleted }) => isCompleted).length}
      />
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
          sortedTasks.map((task) => (
            <Task
              task={task}
              onChangeCompleted={onChangeCompleted}
              onRemove={onRemoveTask}
              key={task.uuid}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
