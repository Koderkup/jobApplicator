import cn from "classnames";
import styles from "./style.module.css";
import logOut from "../../../icons/logOut.svg";
import logIn from "../../../icons/logIn.svg";
import user from "../../../icons/user.svg";
import menu from "../../../icons/menu.svg";
import close from "../../../icons/x.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQurey";

const Header = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery(1000);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={cn("navbar navbar-expand-lg", styles["nav-header"])}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          JobApplicator
        </Link>

        {isMobile ? (
          <div className={styles["menu-icon"]} onClick={toggleMenu}>
            <img src={menu} alt="Menu Icon" />
          </div>
        ) : (
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
        )}

        {!isMobile && (
          <div className={cn("navbar-nav", styles["nav-icon-wrapper"])}>
            <div className={styles["avatar-wrapper"]}>
              <img src={user} />
            </div>
            {auth ? (
              <img src={logOut} />
            ) : (
              <Link to="/register">
                <img src={logIn} />
              </Link>
            )}
          </div>
        )}
      </div>

      {menuOpen && isMobile && (
        <div className={styles["sidebar-menu"]}>
          <div className={styles["close-icon"]} onClick={toggleMenu}>
            <img src={close} alt="Close Menu" />
          </div>
          <NavLink
            className={({ isActive }) =>
              cn("navbar-brand", { [styles["active"]]: isActive })
            }
            to="/filters"
            onClick={toggleMenu}
          >
            ФИЛЬТРЫ
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn("navbar-brand", { [styles["active"]]: isActive })
            }
            to="/offers"
            onClick={toggleMenu}
          >
            ПРЕДЛОЖЕНИЯ
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn("navbar-brand", { [styles["active"]]: isActive })
            }
            to="/result"
            onClick={toggleMenu}
          >
            РЕЗУЛЬТАТ
          </NavLink>
          <div className={styles["icon-wrapper-mobile"]}>
            <img src={user} />

            {auth ? (
              <img src={logOut} />
            ) : (
              <Link to="/register" style={{ display: "inline" }}>
                <img src={logIn} />
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
