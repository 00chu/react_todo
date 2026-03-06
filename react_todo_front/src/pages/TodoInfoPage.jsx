import { useEffect, useState } from "react";
import TodoInfo from "../components/todo/TodoInfo";
import styles from "./pagelayout.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const TodoInfoPage = () => {
  const param = useParams();
  console.log(param.todoNo);

  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKSERVER}/todos/${param.todoNo}`)
      .then((res) => {
        if (res !== "") {
          setTodo(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.page}>
      <h3 className={styles.page_title}>TODO 상세보기</h3>
      {todo && <TodoInfo todo={todo} />}
    </div>
  );
};

export default TodoInfoPage;
