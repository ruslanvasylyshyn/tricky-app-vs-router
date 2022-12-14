import { NavLink } from "react-router-dom";

export function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <NavLink to="/">Go to the home page</NavLink>
      </p>
    </div>
  );
}
