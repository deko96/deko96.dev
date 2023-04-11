import { FC } from "react";
import { HeaderProps } from "../../types";
import "./Header.css";

export const Header: FC<HeaderProps> = ({
  headline,
  title,
  intro,
  contacts,
}) => {
  return (
    <header className="header">
      <div className="who-am-i">
        <h1>{headline}</h1>
        <h6>{title}</h6>
        <p>{intro}</p>
      </div>
      <ul className="contacts">
        {contacts.map(({ type, text, href, icon }) => {
          return (
            <li key={type} className="item">
              <a href={href} target="_blank" rel="noreferrer">
                <img src={icon} alt={type} />
                <span>{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
