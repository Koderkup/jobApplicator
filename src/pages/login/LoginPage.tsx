import styles from "./style.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input";
import google from "../../icons/google.svg";
import AnimatedBalls from "../../components/AnimatedBalls/AnimatedBalls";

const LoginPage = () => {
  return (
    <div className={cn("container", styles["register-form-container"])}>
      <AnimatedBalls/>
      <form className={styles["register-form"]}>
        <h2>ВХОД</h2>
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
        <div className={cn("form-check mt-1 mb-1", styles["remember"])}>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Запомнить меня
          </label>
        </div>
        <button type="submit" className={cn(styles["register-submit"])}>
          ВОЙТИ
        </button>
        <div className={styles["border"]}></div>
        <button type="submit" className={cn(styles["register-submit-google"])}>
          <img src={google} alt="google" />
          продолжить с Google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
