export const calculateAge = (yearDecimal: number): number => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const age = currentYear - Math.floor(yearDecimal);
  return age;
};
