import { ChangeEvent, FormEvent, useState } from 'react';
import plusIcon from '../../assets/plus.svg';
import styles from './styles.module.css';
import { Time } from '../../types';

interface Props {
  onAddNewTask: (content: string, time?: Time) => void;
}

function NewTask({ onAddNewTask }: Props) {
  const [taskContent, setTaskContent] = useState('');
  const [taskTime, setTaskTime] = useState<null | string>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddNewTask(taskContent, taskTime ? {
      hour: taskTime.split(':')[0],
      minutes: taskTime.split(':')[1]
    }: undefined);

    setTaskContent('');
    setTaskTime(null)
  }

  function handleChangeTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value);
  }

  function handleChangeTaskTime(event: ChangeEvent<HTMLInputElement>) {
    setTaskTime(event.target.value);
  }

  return (
    <form className={styles.newTask} onSubmit={handleSubmit}>
      <input type="time" onChange={handleChangeTaskTime} value={taskTime || ''} />
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={taskContent}
        onChange={handleChangeTaskContent}
        required
        minLength={3}
        maxLength={250}
      />
      <button
        type='submit'
        className={styles.button}
        disabled={taskContent.length < 3}
        title={
          taskContent.length < 3
            ? 'Preencha o campo para adicionar uma nova Task'
            : ''
        }
      >
        Criar <img src={plusIcon} />
      </button>
    </form>
  );
}

export default NewTask;
