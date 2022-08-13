import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src='/logo.svg' width={126} height={48} />
    </header>
  );
}

export default Header;
