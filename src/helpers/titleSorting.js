export const titleSorting = (items) => {
  const sorted = items.sort((a, b) => a.title > b.title ? 1 : -1);
  return sorted;
};