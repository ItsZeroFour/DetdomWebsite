import React from "react";
import style from "./LoginPage.module.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  // HTML код
  return (
    <div className={style.container}>
      <form className={style.login__form}>
        <h2 className={style.login__title}>Оставьте заявку на вступление</h2>
        {/* Inputs */}
        <div className={style.row}>
          <div className={style.input__group}>
            <input
              type="text"
              className={style.login__input}
              id="name"
              required
            />
            <label for="name">
              <FontAwesomeIcon icon={faUser} />
              Ваше имя
            </label>
          </div>

          <div className={style.input__group}>
            <input
              type="text"
              className={style.login__input}
              id="lastname"
              required
            />
            <label for="lastname">
              <FontAwesomeIcon icon={faUserGroup} />
              Ваша Фамилия
            </label>
          </div>
        </div>

        {/* ============================= */}

        <div className={style.input__group}>
          <input
            type="email"
            className={style.login__input}
            id="email"
            required
          />
          <label for="email">
            <FontAwesomeIcon icon={faEnvelope} />
            Ваш email
          </label>
        </div>

        <div className={style.input__group}>
          <textarea id="message" rows="8" required></textarea>
          <label for="message">
            <FontAwesomeIcon icon={faComments} />
            Расскажите о себе
          </label>
        </div>

        <button
          type="submit"
          className={style.contact__btn}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Отправить
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
        <h3 className={style.text}>
          Внимание! Отправка данных пока не работает, поэтому, если вы хотите
          вступить, то пишите{" "}
          <a href="https://vk.com/abtoha" target="_blank">
            сюда
          </a>
        </h3>
      </form>
    </div>
  );
};

export default LoginPage;
