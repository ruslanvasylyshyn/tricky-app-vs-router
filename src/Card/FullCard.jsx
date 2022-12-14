import { NavLink, useLoaderData } from "react-router-dom";
import "./fullCard.css";

export function FullCard() {
  const lesson = useLoaderData();
  const youtubeLink = lesson[0].youtube?.split("/")[3];

  return (
    <div className="fullCard-wrapper">
      <NavLink to="/">Return to the home page</NavLink>
      <h1>
        {lesson[0].type}: {lesson[0].title}
      </h1>
      {lesson[0].shortSummary ? <h3>{lesson[0].shortSummary}</h3> : ""}

      <ul>
        <h4>Key points of the {lesson[0].type}:</h4>
        {lesson[0].keyPoints.map((point) => {
          return <li>{point}</li>;
        })}
      </ul>

      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeLink}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
