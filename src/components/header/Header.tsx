import { memo } from "react";
import style from "./header.module.scss";
import Navbar from "./Navbar";

function Header(): ReturnType<React.FC> {
  return (
    <header className={style.header}>
      <div className={style.link}>
        <a href="#!" className={style.logo}>
          Game Store
        </a>
      </div>
      <Navbar />
    </header>
  );
}

export default memo(Header);
