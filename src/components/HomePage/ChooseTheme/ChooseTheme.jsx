import React from "react";
import style from "./ChooseTheme.module.css";
// Img
import DetdomLogo from "../../../images/detdom.png";
import LcomLogo from "../../../images/lcom.png";
import DefaultLogo from "../../../images/home.png";
// Theme
import {
  useTheme,
  Theme_Default,
  Theme_Detdom,
  Theme_Lcom,
} from "../../../context/ThemeProvider";

// Генерируем HTML код с выбором темы
const ChooseThemeItem = ({ theme, text, img }) => {
  const isTheme = useTheme();

  return (
    <div className={style.item} onClick={() => isTheme.change(theme)}>
      <span className={style.item__text}>{text}</span>
      <img className={style.item__img} src={img} alt={text} />
    </div>
  );
};

// Создаем массив из возможных тем
const ChooseTheme = () => {
  const elements = [
    {
      theme: Theme_Detdom,
      text: "Detdom Theme",
      img: DetdomLogo,
    },

    {
      theme: Theme_Lcom,
      text: "Lcom Theme",
      img: LcomLogo,
    },

    {
      theme: Theme_Default,
      text: "Default Theme",
      img: DefaultLogo,
    },
  ];

  return (
    <div className={style.container}>
      {elements.map((element, index) => (
        <ChooseThemeItem
          key={index}
          theme={element.theme}
          text={element.text}
          img={element.img}
        />
      ))}
    </div>
  );
};

export default ChooseTheme;
