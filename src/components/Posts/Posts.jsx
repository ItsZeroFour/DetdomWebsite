import React from "react";
import { postsList } from "../../utils/Api/posts";
import style from "./Posts.module.css";

const Posts = () => {
  // Получаем посты
  const res = postsList.posts;

  // Перебираем объект и достаем из него нужные нам значения
  const postsListEnumeration = res.map(({ title, text, date, id }) => {
    return {
      title,
      text,
      date,
      id,
    };
  });

  return (
    <div className={style.container}>
      {/* Получаем данные */}
      {postsListEnumeration && (
        <div className={style.content}>
          <h2>Последние события</h2>
          {postsListEnumeration.map(({ title, text, date, id }) => (
            <div className={style.content__list} key={id}>
              <h3>{title}</h3>
              <p>{text}</p>
              <time>{date}</time>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
