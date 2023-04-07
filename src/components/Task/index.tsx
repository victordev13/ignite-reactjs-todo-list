import { ITask } from '../../types';
import styles from './styles.module.css';

import TrashIcon from '../../assets/trash.svg';
import { KeyboardEvent } from 'react';

interface Props {
  task: ITask;
  onChangeCompleted: (uuid: string, isCompleted: boolean) => void;
  onRemove: (uuid: string) => void;
}

function Task({ onChangeCompleted, onRemove, task }: Props) {
  function handleRemove() {
    onRemove(task.uuid);
  }

  return (
    <div className={`${styles.task} ${task.isCompleted ? styles.checked : ''}`}>
      <input
        type='checkbox'
        onChange={() => onChangeCompleted(task.uuid, !task.isCompleted)}
        checked={task.isCompleted}
      />

      {task.time && <p className="time">{`${task.time?.hour}:${task.time?.minutes}`}</p>}

      <p>{task.content}</p>
      <a
        href='#'
        className={styles.removeButton}
        onClick={() => handleRemove()}
        onKeyUp={(event: KeyboardEvent<HTMLAnchorElement>) => {
          if (event.code === 'Enter') {
            handleRemove();
          }
        }}
      >
        <img src={TrashIcon} />
      </a>
    </div>
  );
}

export default Task;
