import { ChangeEvent, FormEvent, useState } from 'react';
import plusIcon from '../../assets/plus.svg';
import styles from './styles.module.css';

interface Props {
  onAddNewTask: (content: string) => void;
}

function NewTask({ onAddNewTask }: Props) {
  const [taskContent, setTaskContent] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddNewTask(taskContent);
    setTaskContent('');
  }

  function handleChangeTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value);
  }

  return (
    <form className={styles.newTask} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={taskContent}
        onChange={handleChangeTaskContent}
        required
        minLength={3}
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
