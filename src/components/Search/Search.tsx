import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { useState } from "react";

interface SearchProps {
  hasError: boolean;
  search: React.MouseEventHandler<string | undefined>;
}

export const Search = ({ search, hasError }: SearchProps) => {
  const [text, setText] = useState("");

  const handleSearch: React.MouseEventHandler = (text: string) => {
    search(text);
  };

  return (
    <form action="" onSubmit={handleSearch} autoComplete="off">
      <div className={styles.search}>
        <SearchIcon />
        <input
          type="text"
          name="search__input"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <div>{hasError ? "Not found" : ""}</div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
