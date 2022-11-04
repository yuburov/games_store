import { Fragment, useState, useEffect } from "react";
import classNames from "classnames";
import { CircularProgress } from "@mui/material";
import { Params, useParams } from "react-router";
import cardStyle from "../../components/games/card-game/cardGame.module.scss";
import mainStyle from "../../styles/main.module.css";
import categoryStyle from "../../components/categories/categories.module.scss";
import FilterForm from "../../components/forms/filter-form/FilterForm";
import SearchResult from "../../components/search/SearchResult";
import { IFilterFormValues, initialSearchPanelFilterValues } from "../../types/FilterForm";
import { BASE_URL } from "../../constants/baseUrl";
import CardGame from "../../components/games/card-game/cardGame";
import { playstation, xbox, pc } from "../../constants/category";
import EditCardForm, { displayButtonCreateCard } from "../../components/forms/edit-card-form/EditCardForm";
import { useAppSelector } from "../../hooks/redux";
import getAdmin from "../../redux/selectors/adminSelectors";
import { ICard } from "../../types/Card";

interface ParamTypes extends Params {
  platforms: string;
}

function ProductPage(): ReturnType<React.FC> {
  const [category, setCategory] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { platforms } = useParams() as ParamTypes;
  const { roleAdmin } = useAppSelector(getAdmin);

  const getCategories = () => {
    const categories = [playstation, xbox, pc];

    return categories.find((x) => x === platforms);
  };

  const getFilteredResult = async (values: IFilterFormValues) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/games?categories=${getCategories()}&criteria=${values.criteria}&type=${values.type}&genre=${
          values.genres || ""
        }&age=${values.age || ""}`
      );
      const result = await response.json();

      setCategory(result);
      setIsLoading(false);
    } catch (e) {
      const errorMessage = "Something went wrong";
      console.error(errorMessage);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFilteredResult(initialSearchPanelFilterValues);
  }, [platforms]);

  return (
    <div className={mainStyle.wrapperProducts}>
      <SearchResult />
      {roleAdmin && (
        <EditCardForm subscription={{ submitting: true }} display={displayButtonCreateCard} buttonTitle="Create card" />
      )}
      <div className={classNames(mainStyle.content, mainStyle.grid)}>
        <FilterForm getFilteredResult={getFilteredResult} />
        <div className={classNames(cardStyle.cards, categoryStyle.padding)}>
          {isLoading && <CircularProgress className={cardStyle.spinner} color="secondary" />}

          {category.length ? (
            category.map((games, index) => (
              <Fragment key={index}>
                <CardGame {...games} />
              </Fragment>
            ))
          ) : (
            <h3>Game is not found :(</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
