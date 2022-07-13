import React from "react";
import style from "./HomePage.module.css";
import ChooseTheme from "../../components/HomePage/ChooseTheme/ChooseTheme";
import Posts from "../../components/Posts/Posts";

const HomaPage = () => {
  return (
    <div className={style.container}>
      <h1 className="header__text">Choose Theme</h1>
      <ChooseTheme />
      <Posts />
    </div>
  );
};

export default HomaPage;
