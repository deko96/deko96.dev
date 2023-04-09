import { FC } from "react";
import { ContactType, HeaderProps } from "../../types";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import "./Header.css";
import { IconType } from "react-icons";

const ContactIconMap: Record<ContactType, IconType> = {
  github: BsGithub,
  linkedIn: BsLinkedin,
  website: BsGlobe,
  phone: BsTelephone,
  location: BiCurrentLocation,
  email: AiOutlineMail,
};

export const Header: FC<HeaderProps> = ({
  headline,
  title,
  subtitle,
  photoUrl,
  contacts,
}) => {
  return (
    <header className="header">
      <div className="who-am-i">
        <h1>{headline}</h1>
        <h6>{title}</h6>
        <p>{subtitle}</p>
      </div>
      <img src={photoUrl} alt={headline} className="photo" />
      <ul className="contacts">
        {contacts.map(({ type, text, href }) => {
          const Icon = ContactIconMap[type];
          return (
            <li key={type} className="item">
              <a href={href} target="_blank" rel="noreferrer">
                <span>{text}</span>
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
