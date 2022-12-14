export const RoutesLink = {
  cardLink: (lessonName = null) => (lessonName ? `lesson/${lessonName}` : "lesson/:lessonName"),
};
