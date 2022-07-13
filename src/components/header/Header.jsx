import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
// Choose Theme
import {
  useTheme,
  Theme_Default,
  Theme_Detdom,
  Theme_Lcom,
} from "../../context/ThemeProvider";
// Logo
import DefaultLogo from "../../images/home.png";
import DetdomLogo from "../../images/detdom.png";
import LcomLogo from "../../images/lcom.png";

const Header = () => {
  const [icon, setIcon] = useState(DefaultLogo);
  const isTheme = useTheme();

  // Определаяем, какая стоит тема и из этого меняем иконку
  useEffect(() => {
    switch (isTheme.theme) {
      case Theme_Detdom:
        setIcon(DetdomLogo);
        break;

      case Theme_Lcom:
        setIcon(LcomLogo);
        break;

      case Theme_Default:
        setIcon(DefaultLogo);
        break;

      default:
        break;
    }
  }, [isTheme]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo__container}>
          <NavLink exact to="/">
            <img className={styles.logo} src={icon} alt="Logo" />
          </NavLink>
        </div>
        <NavLink exact to="/">
          <h3 className={styles.logo__text}>Detdom</h3>
        </NavLink>
        <ul className={styles.list__container}>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/members">
              Members
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/gallery">
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/login">
              Contact
            </NavLink>
          </li>

          <div className={styles.animation}></div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
