import { useEffect } from "react";

export function useGetData(url, setLessonsData, setError) {
  useEffect(() => {
    fetch(url)
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw new Error("Network failed", { cause: responce.status }, setError(responce));
      })
      .then((data) => {
        setLessonsData(data);
        setError(false);
      })
      .catch((error) => {
        setError(error);
        setLessonsData([]);
      });
  }, [url]);
}
