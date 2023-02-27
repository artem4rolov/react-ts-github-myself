import { LocalUser } from "../../../types/user";
import styles from "./UserTitle.module.scss";

interface UserTitleProps
  extends Pick<LocalUser, "name" | "created" | "login"> {}

export const UserTitle = ({ name, created, login }: UserTitleProps) => (
  <div className={styles.userTitle}>
    <h2>{name}</h2>
    <p>Joined {new Date(created).toLocaleDateString()}</p>
    <span>{login}</span>
  </div>
);
