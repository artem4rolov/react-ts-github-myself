import { LocalUser } from "../../../types/user";
import styles from "./UserStat.module.scss";

interface UserStatProps
  extends Pick<LocalUser, "repos" | "following" | "followers"> {}

export const UserStat = ({ repos, following, followers }: UserStatProps) => (
  <div className={styles.userStat}>
    <span>{repos}</span>
    <span>{following}</span>
    <span>{followers}</span>
  </div>
);
