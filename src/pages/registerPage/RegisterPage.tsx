import styles from "./style.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  return (
    <div className={cn("container", styles["register-form-container"])}>
      <form className={styles["register-form"]}>
        <h2>Регистрация</h2>
        <Input
          type={"text"}
          label={"Имя"}
          className={styles["enter"]}
        />
        <Input
          type={"text"}
          label={"Фамилия"}
          className={styles["enter"]}
        />
        <Input
          type={"email"}
          label={"E-mail"}
          className={styles["enter"]}
        />
        <Input
          type={"password"}
          label={"Пароль"}
          className={styles["enter"]}
        />
        <Input
          type={"password"}
          label={"Подтвердите пароль"}
          className={styles["enter"]}
        />
        <div className={cn(styles["remember"])}>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Уверен в себе ?
          </label>
        </div>
        <button type="submit" className={cn(styles["register-submit"])}>
          РЕГИСТРАЦИЯ
        </button>
        <div className={styles["border"]}></div>
        <button type="submit" className={cn(styles["register-submit-google"])}>
          <FcGoogle className={styles['google-icon']} />
          продолжить с Google
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
