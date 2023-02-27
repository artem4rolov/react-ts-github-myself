import { LocalUser } from "../../../types/user";
import styles from "./UserStat.module.scss";

interface UserStatProps
  extends Pick<LocalUser, "repos" | "following" | "followers"> {}

export const UserStat = ({ repos, following, followers }: UserStatProps) => (
  <div className={styles.userStat}>
    <div className={styles.block}>
      <span className={styles.label}>Repos</span>
      <h2 className={styles.number}>{repos}</h2>
    </div>
    <div className={styles.block}>
      <span className={styles.label}>Following</span>
      <h2 className={styles.number}>{following}</h2>
    </div>
    <div className={styles.block}>
      <span className={styles.label}>Followers</span>
      <h2 className={styles.number}>{followers}</h2>
    </div>
  </div>
);
