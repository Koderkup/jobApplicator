import styles from "./style.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input";
import { FcGoogle } from "react-icons/fc";
import AnimatedBalls from "../../components/AnimatedBalls/AnimatedBalls";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className={cn("container", styles["register-form-container"])}>
      <AnimatedBalls />
      <form className={styles["register-form"]}>
        <h2>ВХОД</h2>
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
        <button type="submit" className={cn(styles["register-submit"])}>
          ВОЙТИ
        </button>
        <div className={styles["border"]}></div>
        <Link to={"/auth/register"} style={{ textAlign: "left", width: "70%", color: '#0087D1' }}>
          Нету пароля ?
        </Link>
        <button type="submit" className={cn(styles["register-submit-google"])}>
          <FcGoogle className={styles["google-icon"]} />
          продолжить с Google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
