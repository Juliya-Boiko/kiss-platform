export const dateFormatter = (string) => {
  const formatted = string.slice(0, 10).split('-').reverse().join('-');
  return formatted;
};