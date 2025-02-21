import cn from "classnames";
import styles from "./style.module.css";
import logOut from "../../../icons/logOut.svg";
import logIn from "../../../icons/logIn.svg";
import user from "../../../icons/user.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [auth, setAuth] = useState<boolean>(false);
  return (
    <nav className={cn("navbar navbar-expand-lg", styles["nav-header"])}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          JobApplicator
        </Link>

        <div className={cn("navbar-nav", styles[""])}>
          <NavLink
            style={{ textAlign: "center" }}
            className={({ isActive }) =>
              cn("navbar-brand", { [styles["active"]]: isActive })
            }
            to="/filters"
          >
            ФИЛЬТРЫ
          </NavLink>
          <NavLink
            style={{ textAlign: "center" }}
            className={({ isActive }) =>
              cn("navbar-brand", { [styles["active"]]: isActive })
            }
            to="/offers"
          >
            ПРЕДЛОЖЕНИЯ
          </NavLink>
          <NavLink
            style={{ textAlign: "center" }}
            className={({ isActive }) =>
              cn("navbar-brand", { [styles["active"]]: isActive })
            }
            to="/result"
          >
            РЕЗУЛЬТАТ
          </NavLink>
        </div>
        <div className={cn("navbar-nav", styles["nav-icon-wrapper"])}>
          <div className={styles["avatar-wrapper"]}>
            <img src={user} />
          </div>
          {auth ? (
            <img src={logOut} />
          ) : (
            <Link to="/register">
              <img src={logIn} />{" "}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
