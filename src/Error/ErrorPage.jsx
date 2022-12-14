import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <p>Something went rong</p>
      <p>{error}</p>
    </>
  );
}
