import React from "react";

interface LinkItemProps {
  text: string | null;
  icon: React.ReactNode;
  isLink?: boolean | undefined;
}

const LinkItem = ({ text, icon, isLink }: LinkItemProps) => {
  const currentText = text || "Not Available";
  let currentHref: string = "";

  if (isLink) {
    // если ссылка действительно является ссылкой (начинается с http..., то используем ее, если нет - добавляем к ссылке https://)
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  }

  return (
    <div style={{ display: "flex" }}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noreferrer"
            // className={styles.link}
            style={{ marginLeft: "10px" }}
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};

export default LinkItem;
