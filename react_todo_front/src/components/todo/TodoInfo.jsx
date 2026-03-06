import styles from "./todoInfo.module.css";

const TodoInfo = ({ todo }) => {
  console.log(todo);

  return (
    <div className={styles.info}>
      <div className={styles.top}>
        <span className={todo.todoDone === 0 ? styles.badge1 : styles.badge2}>
          {todo.todoDone === 0 ? "진행중" : "완료"}
        </span>
        <span>No.{todo.todoNo}</span>
      </div>
      <hr></hr>
      <div className={styles.list}>
        <ul>
          <li>작성자</li>
          <li>{todo.todoWriter}</li>
        </ul>
        <ul className={styles.ul}>
          <li>내용</li>
          <li>{todo.todoContent}</li>
        </ul>
        <ul className={styles.ul}>
          <li>작성일</li>
          <li>{todo.todoDate}</li>
        </ul>
        <div className={styles.info_btn}>
          <button>완료됨</button>
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default TodoInfo;
