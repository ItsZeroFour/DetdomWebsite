import { React, useState } from "react";
import styles from "./PeoplePage.module.css";
import { detdomMembers } from "../../utils/Api/detdom";
// React
import { Link } from "react-router-dom";

const PeoplePage = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  // Получаем данные из объекта
  const res = detdomMembers.members;

  // Перебираем объект и достаем из него нужные нам значения
  const peopleList = res.map(({ name, id, img }) => {
    return {
      name,
      id,
      img,
    };
  });

  // Фильтруем список по поиску
  const filter = peopleList.filter((name) => {
    return name.name.toLowerCase().includes(inputSearchValue.toLowerCase());
  });

  const getResponce = () => {
    if (res) {
      setPeople(peopleList);
    }
  };

  // Получаем значение из инпута
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputSearchValue(value);
  };

  // Генерация HTML кода
  return (
    <div>
      <div className={styles.search__content}>
        <div className={styles.search__data}>
          <input
            className={styles.search__input}
            type="text"
            value={inputSearchValue}
            onChange={handleInputChange}
            required
          />
          <div className={styles.underline}></div>
          <label>Поиск участников</label>
        </div>
      </div>
      <ul className={styles.list__container}>
        {filter.map(({ name, img, id }) => (
          <li className={styles.list__item} key={id}>
            <a href="#">
              <Link to={`/members/${id}`}>
                <img className={styles.list__img} src={img} alt={name} />
                <h3 className={styles.list__name}>{name}</h3>
              </Link>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Экспортируем переменную
export default PeoplePage;
