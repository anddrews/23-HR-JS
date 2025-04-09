import styles from './Input.module.css';

export const Input = () => {
  return (
    <label className={styles.input}>
        Type something:
    <input
      type="text"
      className=""
    />
    </label>
  );
}