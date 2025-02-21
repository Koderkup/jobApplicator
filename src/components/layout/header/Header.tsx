import cn from "classnames";
import styles from "./style.module.css";
import logOut  from "../../../icons/logOut.svg";
import logIn  from "../../../icons/logIn.svg";
import user  from "../../../icons/user.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [auth, setAuth] = useState<boolean>(false)
  return (
    <nav className={cn("navbar navbar-expand-lg", styles["nav-header"])}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          JobApplicator
        </Link>

        <div className={cn("navbar-nav", styles[""])}>
          <Link className="navbar-brand" to="/filters">
            ФИЛЬТРЫ
          </Link>
          <Link className="navbar-brand" to="/offers">
            ПРЕДЛОЖЕНИЯ
          </Link>
          <Link className="navbar-brand" to="/result">
            РЕЗУЛЬТАТ
          </Link>
        </div>
        <div className={cn("navbar-nav", styles["nav-icon-wrapper"])}>
          <div className={styles["avatar-wrapper"]}>
            <img src={user} />
          </div>
          {auth ? (
            <img src={logOut} />
          ) : (
            <Link to='/register'>
              <img src={logIn} />{" "}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
