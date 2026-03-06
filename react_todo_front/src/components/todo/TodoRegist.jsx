import { useState } from "react";
import styles from "./todoRegist.module.css";
import axios from "axios";

const TodoRegist = ({ registTodo }) => {
  const [todo, setTodo] = useState({
    todoContent: "",
    todoWriter: "",
  });

  const inputTodo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newTodo = { ...todo, [name]: value };
    setTodo(newTodo);
  };

  const submit = (e) => {
    e.preventDefault();
    if (todo.todoContent === "" || todo.todoWriter === " ") {
      return;
    }

    registTodo(todo);
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <div className={styles.input_wrap}>
        <label htmlFor="todoWriter">작성자</label>
        <input
          type="text"
          name="todoWriter"
          id="todoWriter"
          value={todo.todoWriter}
          onChange={inputTodo}
        ></input>
      </div>
      <div className={styles.input_wrap}>
        <label htmlFor="todoContent">내용</label>
        <input
          type="text"
          name="todoContent"
          id="todoContent"
          value={todo.todoContent}
          onChange={inputTodo}
        ></input>
      </div>
      <div className={styles.button_wrap}>
        <button className={styles.btn} type="submit">
          등록하기
        </button>
      </div>
    </form>
  );
};

export default TodoRegist;
