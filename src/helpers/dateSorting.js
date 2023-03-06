import moment from "moment";

export const dateSorting = (items) => {
  const sorted = items.sort((a, b) => moment(b.updatedAt) - moment(a.updatedAt));
  return sorted;
};