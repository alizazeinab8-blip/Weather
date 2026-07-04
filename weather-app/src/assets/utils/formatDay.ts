export const formatDay = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
  });
};