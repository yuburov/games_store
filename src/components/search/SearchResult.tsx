import React, { Fragment, memo, SetStateAction } from "react";
import debounce from "lodash.debounce";
import { ICard } from "@/types/Card";
import { BASE_URL } from "../../constants/baseUrl";
import SearchInput from "./SearchInput";
import CardGame from "../games/card-game/cardGame";
import style from "../games/card-game/cardGame.module.scss";

const fetchSearchResults = async (query: string) => {
  if (query && query.length >= 3) {
    const url = `${BASE_URL}/games?search=${query.trim()}`;
    const res = await fetch(url);
    const resJson = res.json();

    return resJson;
  }

  return [];
};

const debouncedFetchData = debounce((query: string, cb: (res: SetStateAction<[]>) => void) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const fetchData = async (query: string, cb: (res: SetStateAction<[]>) => void) => {
    const res = await fetchSearchResults(query);
    cb(res);
  };

  return fetchData(query, cb);
}, 300);

function SearchResult(): ReturnType<React.FC> {
  const [query, setQuery] = React.useState<string>("");
  const [results, setResults] = React.useState<[]>([]);

  return (
    <>
      <SearchInput
        value={query}
        onChangeText={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
          debouncedFetchData(e.target.value, (res: SetStateAction<[]>) => {
            setResults(res);
          });
        }}
      />
      <div className={style.cards}>
        {results.map((result, index) => (
          <div key={index}>
            <Fragment key={index}>
              <CardGame {...(result as ICard)} />
            </Fragment>
          </div>
        ))}
      </div>
    </>
  );
}

export default memo(SearchResult);
