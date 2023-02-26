import { LocalUser } from "../../../types/user";
import styles from "./UserDesc.module.scss";

interface UserDescProps extends Pick<LocalUser, "bio"> {}

export const UserDesc = ({ bio }: UserDescProps) => (
  <div className={styles.userDesc}>
    <span>{bio}</span>
  </div>
);
