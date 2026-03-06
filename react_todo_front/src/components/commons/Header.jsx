import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.site_logo}>
          <Link to="/">TODO APP</Link>
        </div>
        <div className={styles.nav}>
          <Link to="/regist">할일등록</Link>
          <Link to="#">menu2</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
