import styles from "./button.module.css";

export const Button = ({ text, type, onClick, longButton = false }) => {
  return (
    <button
      className={styles.styledbutton}
      type={type}
      onClick={onClick}
      // longButton={longButton ? true : false}
    >
      {text}
    </button>
  );
};
