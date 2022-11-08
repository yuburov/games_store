import style from "../../styles/main.module.scss";
import Categories from "../../components/categories/Categories";
import SearchResult from "../../components/search/SearchResult";
import Games from "../../components/games/Games";

export default function HomePage(): ReturnType<React.FC> {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <SearchResult />
        <Categories />
        <Games />
      </div>
    </div>
  );
}
