import styles from "./style.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input";
const RegisterPage = () => {
  return (
    <div className={cn("container", styles["register-form-container"])}>
      <form className={styles["register-form"]}>
        <h2>Регистрация</h2>
        <Input
          type={"text"}
          label={"Имя"}
          placeholder={"Имя"}
          className={styles["enter"]}
        />
        <Input
          type={"text"}
          label={"Фамилия"}
          placeholder={"Фамилия"}
          className={styles["enter"]}
        />
        <Input
          type={"email"}
          label={"E-mail"}
          placeholder={"E-mail"}
          className={styles["enter"]}
        />
        <Input
          type={"password"}
          label={"Пароль"}
          placeholder={"Пароль"}
          className={styles["enter"]}
        />
        <Input
          type={"password"}
          label={"Подтвердите пароль"}
          placeholder={"Подтвердите пароль"}
          className={styles["enter"]}
        />
        <button type="submit" className={cn(styles["register-submit"])}>
          РЕГИСТРАЦИЯ
        </button>
        <div className={styles["border"]}></div>
      </form>
    </div>
  );
};

export default RegisterPage;
