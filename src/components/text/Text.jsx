import styles from './Text.module.css';

export const Text = () => {
  return (
    <div className={styles.text}>
        <h2 className={styles.textHeader}>User input is:</h2>
        <p>Here should be user's input</p>
    </div>
  );
}