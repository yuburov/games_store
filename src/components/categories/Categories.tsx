import { memo } from "react";
import style from "./categories.module.scss";
import CategoryItem from "./category-item/CategoryItem";

function Categories(): ReturnType<React.FC> {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <p>Categories</p>
      </div>
      <div className={style.items}>
        <CategoryItem />
      </div>
    </div>
  );
}

export default memo(Categories);
