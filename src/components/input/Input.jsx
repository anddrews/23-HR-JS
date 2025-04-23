import styles from './Input.module.css';

export const Input = ({value, onChange}) => {
  return (
    <label className={styles.input}>
        Type something:
    <input
      type="text"
      className=""
      value={value}
      onChange={({target: {value}}) => {
        onChange(value);
      }}
    />
    </label>
  );
}