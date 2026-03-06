import { Link, useNavigate } from "react-router-dom";
import styles from "./todolist.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const TodoList = ({ todoList }) => {
  return (
    <div className={styles.list}>
      {todoList.map((todo, i) => {
        return <TodoItem todo={todo} key={"todo-" + i} />;
      })}
    </div>
  );
};

const TodoItem = ({ todo }) => {
  return (
    <Link to={`/info/${todo.todoNo}`}>
      <ul className={styles.item}>
        <li className={styles.content}>
          <span className={styles.todo_content}>{todo.todoContent}</span>
          <span className={styles.todo_writer}>{todo.todoWriter}</span>
        </li>
        <li>
          <span className={todo.todoDone === 0 ? styles.badge1 : styles.badge2}>
            {todo.todoDone === 0 ? "진행중" : "완료"}
          </span>
        </li>
      </ul>
    </Link>
  );
};

export default TodoList;
