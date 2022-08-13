import { ITask } from '../../types';
import styles from './styles.module.css';

interface Props {
  task: ITask;
  onChangeCompleted: (uuid: string, isCompleted: boolean) => void;
}

function Task({ onChangeCompleted, task }: Props) {
  return (
    <div className={`${styles.task} ${task.isCompleted ? styles.checked : ''}`}>
      <input type='checkbox' onChange={() => onChangeCompleted(task.uuid, !task.isCompleted)}/>
      <p>
        {task.content}
      </p>
    </div>
  );
}

export default Task;
