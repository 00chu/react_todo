import axios from "axios";
import TodoRegist from "../components/todo/TodoRegist";
import styles from "./pagelayout.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoRegistPage = () => {
  const navigete = useNavigate();

  const registTodo = (todo) => {
    axios
      .post(`${import.meta.env.VITE_BACKSERVER}/todos`, todo)
      .then((res) => {
        console.log(res);
        if (res.data === 1) {
          navigete("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO등록</h3>
      <TodoRegist registTodo={registTodo} />
    </div>
  );
};

export default TodoRegistPage;
