import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  // Убираем дефолтное воведения браузера
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer>
      <div className={style.footer__content}>
        <h3 className={style.footer__title}>Подать заявку на вступление</h3>
        <p className={style.footer__text}>Введите ссылку вашу страницу:</p>
        <form className={style.footer__form}>
          <input
            className={style.footer__form__input}
            type="link"
            placeholder="Введите ссылку на вашу страницу VK"
          />
          <button onClick={handleSubmit} className={style.footer__form__btn}>
            Отправить
          </button>
        </form>
      </div>
      <div className={style.footer__bottom}>
        <ul className={style.footer__bottom__list}>
          <li>&copy;2022 Detdom Corporation</li>
          <li>
            Create by{" "}
            <a
              className={style.footer__bottom__link}
              href="https://vk.com/nullbebra"
              target="_black"
            >
              ItsZeroFour
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
