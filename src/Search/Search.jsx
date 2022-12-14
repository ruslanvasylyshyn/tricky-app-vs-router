import { useState } from "react";
import "./search.css";
import { useGetData } from "../Data/useGetData";
import { Card } from "../Card/Card";
import { ErrorChecker } from "../Error/ErrorChecker";

const URL = "https://react-course-api.azurewebsites.net/lesson/";

function Search() {
  const [notStarted, setNotStarted] = useState(true);
  const [lessonsData, setLessonsData] = useState([]);
  const [error, setError] = useState(false);
  const [finalUrl, setFinalUrl] = useState();
  function handleSubmit(e) {
    setFinalUrl(`${URL}${e.target[0].value}`);
    setNotStarted(false);
  }
  useGetData(finalUrl, setLessonsData, setError);

  return (
    <div className="App">
      <h1>Please, enter search query</h1>
      <form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <input type="text" name="text" id="text" placeholder="Write your query here" />
        <button type="submit">Search</button>
      </form>

      <div>
        {error !== undefined ? <ErrorChecker error={error} /> : ""}
        <ul>
          {lessonsData.length == "0" && notStarted === true
            ? ""
            : lessonsData.length == "0" && notStarted === false && error === false
            ? "За вашим запитом уроків не знайдено. Спробуйте інший запит."
            : lessonsData.map((lesson, i) => {
                return <Card lesson={lesson} key={i} />;
              })}
        </ul>
      </div>
    </div>
  );
}

export default Search;
