import { LocalUser } from "../../types/user";
import styles from "./UserCard.module.scss";
import { UserDesc } from "./UserDesc";
import { UserLinks } from "./UserLinks";
import { UserStat } from "./UserStat";
import { UserTitle } from "./UserTitle";

interface UserCardProps extends LocalUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle created={props.created} login={props.login} name={props.name} />
    <UserDesc bio={props.bio} />
    <UserStat
      followers={props.followers}
      following={props.following}
      repos={props.repos}
    />
    <UserLinks
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
