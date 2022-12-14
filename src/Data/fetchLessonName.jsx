export function fetchLessonName({ params }) {
  return fetch(`https://react-course-api.azurewebsites.net/lesson/${params.lessonName}`)
    .then((responce) => {
      if (responce.ok) {
        return responce.json();
      }
      throw new Error("Network failed в картці");
    })
    .then((data) => data)
    .catch((error) => console.log(error));
}
