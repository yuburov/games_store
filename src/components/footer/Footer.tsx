import React from "react";
import style from "./footer.module.scss";
import footerItem from "../../constants/footerItem";

export default function Footer(): ReturnType<React.FC> {
  return (
    <footer className={style.footer}>
      <span>Incredible convenient</span>
      <div className={style.list}>
        {footerItem.map(({ linkRef, imageLink, alt }) => (
          <div key={imageLink} className={style.item}>
            <a href={linkRef}>
              <img src={imageLink} alt={alt} />
            </a>
          </div>
        ))}
      </div>
      <span> © LoremIpsum, 2021-2022</span>
    </footer>
  );
}
