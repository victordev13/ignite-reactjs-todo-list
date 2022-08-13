import styles from './styles.module.css';

function Task() {
  return (
    <div className={styles.task}>
      <input type='checkbox' />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
    </div>
  );
}

export default Task;
