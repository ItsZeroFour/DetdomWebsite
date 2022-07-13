import React, { useState } from "react";
import style from "./Gallery.module.css";
import { GalleryList } from "../../utils/Api/gallery";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const GalleryPage = () => {
  const res = GalleryList.gallery;

  // Перебираем объект и достаем мз него ссылку на картинку и id
  const peopleList = res.map(({ src, id }) => {
    return {
      src,
      id,
    };
  });

  // Открытие модального окна
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div className={style.container}>
      <div
        className={model ? "modal open" : "modal"}
        onClick={() => setModel(false)}
      >
        {/* stopPropagation - Убираем возможность закрытия модального окна при клике на картинку */}
        <img src={tempImgSrc} onClick={(event) => event.stopPropagation()} />
        <FontAwesomeIcon icon={faClose} />
      </div>
      {/* title */}
      <div className={style.heading}>
        <h1>
          Photo <span>Gallery</span>
        </h1>
      </div>
      {/* Img */}
      {peopleList && (
        <div className={style.gallery__wrapper}>
          {peopleList.map(({ src, id }) => (
            <div
              className={style.gallery__box}
              key={id}
              onClick={() => getImg(src)}
            >
              <img src={src} alt="Gallery img" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
