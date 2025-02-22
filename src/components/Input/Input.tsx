import cn from "classnames";
import styles from "./style.module.css";
import { LuEyeClosed } from "react-icons/lu";
import { useState } from "react";
interface InputProps {
  label?: string;
  type: string;
  className?: string;
  placeholder?: string;
  autocomplete?: string;
}

const Input = ({
  label = "",
  type = "text",
  className = "",
  placeholder = "",
}: InputProps) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const toggleIsVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };
  return (
    <div
      className={cn(styles["input-wrapper"], {
        [className!]: Boolean(className),
      })}
    >
      <label>{label}</label>
      <input
        type={!isVisiblePassword ? type : 'text'}
        className={styles["input"]}
        placeholder={placeholder}
        required
      />
      {type === "password" ? (
        <LuEyeClosed className={styles["LuEyeClosed"]} onClick={toggleIsVisiblePassword}/>
      ) : null}
    </div>
  );
};

export default Input;
