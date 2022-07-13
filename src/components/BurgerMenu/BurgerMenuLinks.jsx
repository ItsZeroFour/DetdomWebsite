import React, { useState, useEffect } from "react";
import style from "./BurgerMenu.module.css";
// Router
import { NavLink } from "react-router-dom";
// Theme
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
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPeopleGroup,
  faPhotoFilm,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";

const BurgerMenuLinks = (active, setActive) => {
  // Generate Logo
  const [icon, setIcon] = useState(DefaultLogo);
  const isTheme = useTheme();

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
    <div className={style.container}>
      <div className={style.blur} />
      <div
        className={style.burger__menu}
        onClick={(event) => event.stopPropagation()}
      ></div>
      {/* Nav list */}
      {/* onClick={() => setActive(false)} */}
      <ul className={style.list__container}>
        {/* Logo */}
        <div
          className={style.logo__content}
          onClick={(event) => event.stopPropagation()}
        >
          <img src={icon} alt="Logo" />
          <h2>Detdom</h2>
        </div>
        {/* list */}
        <li className={active ? "menu active" : "menu"}>
          <NavLink exact to="/">
            <FontAwesomeIcon
              className={style.burger__list__icon}
              icon={faHouse}
            />
            Home
          </NavLink>
        </li>

        <li className={active ? "menu active" : "menu"}>
          <NavLink exact to="/members">
            <FontAwesomeIcon
              className={style.burger__list__icon}
              icon={faPeopleGroup}
            />
            Members
          </NavLink>
        </li>

        <li className={active ? "menu active" : "menu"}>
          <NavLink exact to="/gallery">
            <FontAwesomeIcon
              className={style.burger__list__icon}
              icon={faPhotoFilm}
            />
            Gallery
          </NavLink>
        </li>

        <li className={active ? "menu active" : "menu"}>
          <NavLink exact to="/login">
            <FontAwesomeIcon
              className={style.burger__list__icon}
              icon={faContactCard}
            />
            Contact
          </NavLink>
        </li>

        {/* Footer */}
        <div
          className={style.footer}
          onClick={(event) => event.stopPropagation()}
        >
          <p>&#169;Detdom Corporation</p>
          <p>
            Create by
            <span>
              <a href="https://vk.com/nullbebra"> ItsZeroFour</a>
            </span>
          </p>
        </div>
      </ul>
    </div>
  );
};

export default BurgerMenuLinks;
