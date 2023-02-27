import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { useRef, useState } from "react";

interface SearchProps {
  hasError: boolean;
  search: (text: string) => void;
}

export const Search = ({ search, hasError }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputRef.current) {
      const text = inputRef.current?.value || "";
      search(text.trim());
    }
  };

  return (
    <form action="" onSubmit={handleSearch} autoComplete="off">
      <div className={styles.search}>
        <SearchIcon />
        <input type="text" name="search__input" ref={inputRef} />
        <div className={styles.error}>{hasError ? "Not found" : ""}</div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
