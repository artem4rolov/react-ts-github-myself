import { useState } from "react";
import styles from "./Header.module.scss";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";

export const Header = () => {
  const [nightTheme, setNightTheme] = useState(false);

  // смена темы оформления
  document.body.dataset.theme = nightTheme ? "dark" : "light";

  return (
    <div className={styles.header}>
      <h2>devFinder</h2>
      <div className={styles.theme}>
        <span>{nightTheme ? "DARK" : "LIGHT"}</span>
        <span onClick={() => setNightTheme(!nightTheme)}>
          {nightTheme ? <MoonIcon /> : <SunIcon />}
        </span>
      </div>
    </div>
  );
};
