import React, { useState } from "react";
import style from "./BurgerMenu.module.css";
import BurgerMenuLinks from "./BurgerMenuLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  // ======Show menu======
  let menu;

  // Если true - Вставляем в html код
  if (showMenu) {
    menu = <BurgerMenuLinks active={showMenu} setActive={setShowMenu} />;
  }

  return (
    <div className={style.container}>
      <div className={style.burger__container}>
        <span>
          <FontAwesomeIcon
            className={style.burger__menu__icon}
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>
        {/* Menu list */}
        <div onClick={() => setShowMenu(!showMenu)}>{menu}</div>
      </div>
    </div>
  );
};

export default BurgerMenu;
