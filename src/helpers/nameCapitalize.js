export const nameCapitalize = (string) => {
  const capitalizedString = string[0].toUpperCase() + string.slice(1)
  return capitalizedString;
}