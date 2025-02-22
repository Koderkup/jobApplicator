import cn from "classnames";
import styles from "./style.module.css";
import { CiUser } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQurey";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
const Header = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery(1000);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={cn(styles["nav-header"])}>
      <div className={cn(styles[""])}>
        <Link style={{ color: "black" }} className={cn(styles[""])} to="/">
          JobApplicator
        </Link>
      </div>
      {isMobile ? (
        <div className={styles["menu-icon"]} onClick={toggleMenu}>
          <IoMenuOutline className={styles["IoMenuOutline"]} />
        </div>
      ) : (
        <div className={cn(styles["nav-link-wrapper"])}>
          <NavLink
            style={{ textAlign: "center" }}
            className={({ isActive }) =>
              cn(styles["nav-link"], { [styles["active"]]: isActive })
            }
            to="/filters"
          >
            ФИЛЬТРЫ
          </NavLink>
          <NavLink
            style={{ textAlign: "center" }}
            className={({ isActive }) =>
              cn(styles["nav-link"], { [styles["active"]]: isActive })
            }
            to="/offers"
          >
            ПРЕДЛОЖЕНИЯ
          </NavLink>
          <NavLink
            style={{ textAlign: "center" }}
            className={({ isActive }) =>
              cn(styles["nav-link"], { [styles["active"]]: isActive })
            }
            to="/result"
          >
            РЕЗУЛЬТАТ
          </NavLink>
        </div>
      )}

      {!isMobile && (
        <div className={cn(styles["nav-icon-wrapper"])}>
          <div className={styles["avatar-wrapper"]}>
            <CiUser className={styles["CiUser"]} />
          </div>
          {auth ? (
            <CiLogout className={styles["CiLogout"]} />
          ) : (
            <Link to="/login">
              <CiLogin className={styles["CiLogin"]} />
            </Link>
          )}
        </div>
      )}

      {menuOpen && isMobile && (
        <div className={styles["sidebar-menu"]}>
          <div className={styles["close-icon"]} onClick={toggleMenu}>
            <IoMdClose className={styles["IoMdClose"]} />
          </div>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], {
                [styles["active"]]: isActive && !isMobile,
              })
            }
            to="/filters"
            onClick={toggleMenu}
          >
            <span>ФИЛЬТРЫ</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], {
                [styles["active"]]: isActive && !isMobile,
              })
            }
            to="/offers"
            onClick={toggleMenu}
          >
            <span>ПРЕДЛОЖЕНИЯ</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], {
                [styles["active"]]: isActive && !isMobile,
              })
            }
            to="/result"
            onClick={toggleMenu}
          >
            <span>РЕЗУЛЬТАТ</span>
          </NavLink>
          <div className={styles["icon-wrapper-mobile"]}>
            <CiUser className={styles["CiUser"]} />

            {auth ? (
              <CiLogout className={styles["CiLogout"]} />
            ) : (
              <Link to="/login" style={{ display: "inline" }}>
                <CiLogin className={styles["CiLogin"]} />
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
