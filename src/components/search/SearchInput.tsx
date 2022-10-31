import style from "./searchInput.module.scss";

export interface ISearchInputProps {
  value: string;
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ value, onChangeText }: ISearchInputProps): ReturnType<React.FC> {
  return (
    <div className={style.container}>
      <input className={style.searchInput} type="text" value={value} onChange={onChangeText} placeholder="Search" />
    </div>
  );
}

export default SearchInput;
