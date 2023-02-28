import React from "react";

interface LinkItemProps {
  text: string | null;
  icon: React.ReactNode;
  isLink?: boolean | undefined;
  isTwitter?: boolean | undefined;
}

const LinkItem = ({ text, icon, isLink, isTwitter }: LinkItemProps) => {
  // берем либо ссылку, либо дефолтный текст в случае отсутсвия ссылки
  let currentText = text || "Not Available";
  // по дефолту ссылка пустая
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
          <a href={currentHref} target="_blank" rel="noreferrer">
            {currentText}
          </a>
        ) : isTwitter ? (
          <a href={currentHref}>{currentText}</a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};

export default LinkItem;
