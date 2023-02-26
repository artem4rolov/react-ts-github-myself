import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

interface SearchProps {}

export const Search = ({}: SearchProps) => (
  <div className={styles.search}>
    <SearchIcon />
    <input type="text" />
    <button>Search</button>
  </div>
);
