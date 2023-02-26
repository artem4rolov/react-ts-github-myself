import React from "react";
import styles from "./Container.module.scss";

// детьми этого компонента являются другие компоненты
interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
