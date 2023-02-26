import { LocalUser } from "../../../types/user";
import styles from "./UserLinks.module.scss";

import { ReactComponent as LocationIcon } from "../../../assets/icon-location.svg";
import { ReactComponent as BlogIcon } from "../../../assets/icon-website.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "../../../assets/icon-company.svg";

interface DataIerarchy {
  icon: React.ReactNode;
  text: string | null;
}

interface UserLinksProps
  extends Pick<LocalUser, "location" | "company" | "blog" | "twitter"> {}

export const UserLinks = ({
  location,
  company,
  blog,
  twitter,
}: UserLinksProps) => {
  const data: DataIerarchy[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.UserLinks}>
      {data.map((item, index) => (
        <div>
          <label htmlFor="">{item.icon}</label>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};
