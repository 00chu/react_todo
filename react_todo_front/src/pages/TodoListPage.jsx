import { useEffect, useState } from "react";
import styles from "./pagelayout.module.css";
import axios from "axios";
import TodoList from "../components/todo/TodoList";

const TodoListPage = () => {
  const [todoList, setTodoList] = useState([]);
  const backServer = import.meta.env.VITE_BACKSERVER;

  useEffect(() => {
    axios
      .get(`${backServer}/todos`)
      .then((res) => {
        if (res !== "") {
          setTodoList(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 목록</h3>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoListPage;
