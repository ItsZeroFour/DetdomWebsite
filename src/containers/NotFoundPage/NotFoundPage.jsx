import { React } from "react";
import { useLocation } from "react-router-dom";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  // Достаем текущее имя пути
  let location = useLocation();

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <h2>404</h2>
          <h4>Oops! Page not found</h4>
          <p>
            Страница "{location.pathname}" не найдена, проверьте корректность
            введенной вами ссылки
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
