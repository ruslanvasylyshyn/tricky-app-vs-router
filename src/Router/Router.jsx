import { createBrowserRouter } from "react-router-dom";
import { FullCard } from "../Card/FullCard";
import { fetchLessonName } from "../Data/fetchLessonName";
import { ErrorPage } from "../Error/ErrorPage";
import { Layout } from "../Layout/Layout";
import { NoMatch } from "../NoMatch/NoMatch";
import Search from "../Search/Search";
import { RoutesLink } from "./routesLink";

export const router = createBrowserRouter([
  {
    path: "tricky-app-vs-router",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Search />,
      },
      {
        path: RoutesLink.cardLink(),
        element: <FullCard />,
        loader: fetchLessonName,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);
