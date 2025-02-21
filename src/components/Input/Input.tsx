import cn from "classnames";
import styles from "./style.module.css";
interface InputProps {
  label?: string;
  type: string;
  className?: string;
  placeholder?: string;
}

const Input = ({
  label = "",
  type = "text",
  className = "",
  placeholder = "",
}: InputProps) => {
  return (
    <div
      className={cn(styles["input-wrapper"], {
        [className!]: Boolean(className),
      })}
    >
      <label>{label}</label>
      <input type={type} className={styles['input']} placeholder={placeholder} required/>
    </div>
  );
};

export default Input;
