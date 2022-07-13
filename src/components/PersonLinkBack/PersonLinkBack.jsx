import React from "react";
import { useHistory } from "react-router-dom";
import style from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const history = useHistory();
  // Функция по перемещению по истории браузера
  const handleGoBack = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <a href="#" onClick={handleGoBack} className={style.back}>
      <span>&#8592;</span>Go back
    </a>
  );
};

export default PersonLinkBack;
