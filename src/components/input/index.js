import styles from "./input.module.scss";

export default function Input({ label, ...props }) {
  return <input {...props} className={styles.input} />;
}
