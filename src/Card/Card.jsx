import { NavLink } from "react-router-dom";
import "./card.css";
import { RoutesLink } from "../Router/routesLink";

export function Card({ lesson }) {
  return (
    <li className="lessonCard">
      <span>{lesson.type}:</span>
      <NavLink to={RoutesLink.cardLink(lesson.name)}>{lesson.title}</NavLink>
    </li>
  );
}
