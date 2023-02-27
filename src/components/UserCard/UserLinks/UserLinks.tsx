import { LocalUser } from "../../../types/user";
import styles from "./UserLinks.module.scss";

import { ReactComponent as LocationIcon } from "../../../assets/icon-location.svg";
import { ReactComponent as BlogIcon } from "../../../assets/icon-website.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icon-twitter.svg";
import { ReactComponent as CompanyIcon } from "../../../assets/icon-company.svg";
import LinkItem from "./LinkItem";

interface DataIerarchy {
  icon: React.ReactNode;
  text: string | null;
  isLink?: boolean;
}

const isLinkTwitter = (text: string | null): string => {
  let currentHref =
    text && text.startsWith("http") ? text : `https://twitter.com/${text}`;

  return currentHref;
};

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
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: isLinkTwitter(twitter) && twitter,
      isLink: true,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.userLinks}>
      {data.map((item, index) => (
        <LinkItem key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
  );
};
