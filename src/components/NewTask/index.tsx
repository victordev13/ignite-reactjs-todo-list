import plusIcon from '../../assets/plus.svg';
import styles from './styles.module.css';

function NewTask() {
  return (
    <form className={styles.newTask}>
      <input type='text' placeholder='Adicione uma nova tarefa' />
      <button type='submit' className={styles.button}>Criar <img src={plusIcon} /></button>
    </form>
  );
}

export default NewTask;
