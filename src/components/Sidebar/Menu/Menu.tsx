import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faHouse,
  faUpLong,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Menu: React.FC = () => {
  const Items = [
    {
      label: "Лента",
      icon: faHouse,
      to: "/",
    },
    { label: "Сообщения", icon: faCommentDots, to: "/message" },
    { label: "Рейтинг JR", icon: faUpLong, to: "/raiting" },
    { label: "Подписки", icon: faBell, to: "/subscribe" },
  ].map((el) => (
    <NavLink
      key={el.label}
      to={el.to}
      className={({ isActive }) => {
        const active =
          " rounded-[5px] shadow-['0_35px_60px_-15px_rgba(0, 0, 0, 0.5)']  ";

        return `flex justify-between  items-center p-[2px] ${
          isActive ? styles.active : ""
        }`;
      }}
    >
      <FontAwesomeIcon icon={el.icon} />
      <span>{el.label}</span>
    </NavLink>
  ));

  return <nav className="flex flex-col ">{Items}</nav>;
};

export default Menu;
