export const getBankCourse = (course: number, type: "sale" | "purchase") => {
  return (course * (type === "sale" ? 0.99 : 1.01)).toFixed(3);
};
