import { React, useEffect, useState } from "react";
import { detdomMembers } from "../../utils/Api/detdom";
import style from "./PersonPage.module.css";
import { useParams } from "react-router-dom";
import PersonLinkBack from "../../components/PersonLinkBack/index";

const PersonPage = () => {
  // Записываем в переменные все данные пользователей
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);

  // Получаем id текущей страницы
  const { id } = useParams();

  useEffect(() => {
    // Получаем данные из объекта
    const res = detdomMembers.members;

    // Получаем данные из id пользователя (на которого мы нажали)
    setPersonInfo([
      { title: "Возраст", data: res[id].age },
      { title: "Рост", data: res[id].height },
      { title: "Роль", data: res[id].role },
      { title: "Gender", data: res[id].gender },
      { title: "ДР", data: res[id].birthyear },
    ]);
    // Записываем имя пользователя
    setPersonName(res[id].name);
    // Получаем его аватарку
    setPersonPhoto(res[id].img);
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        {/* Person Photo */}
        <div className={style.imgBx}>
          <img src={personPhoto} alt={personName} />
        </div>
        <div className={style.content}>
          <div className={style.details}>
            {/* Person Name & description */}
            <h2>
              {personName}
              <br />
              <span>{detdomMembers.members[id].description}</span>
            </h2>

            <div className={style.data}>
              {/* Person Info */}
              {personInfo && (
                <ul className={style.data__list}>
                  {personInfo.map(
                    ({ title, data }) =>
                      data && (
                        <li key={title}>
                          <h3>
                            <span>{title}</span> <br /> {data}
                          </h3>
                        </li>
                      )
                  )}
                </ul>
              )}
            </div>
            <div className={style.active__btn}>
              <PersonLinkBack />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
