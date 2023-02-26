import { theme } from "style/theme";

const { colors } = theme;

export const inputOutlineColor = (showError, error, input) => {
  if (error && showError) {
    return colors.support.error;
  }
  if (!error && showError === input) {
    return colors.brand.green;
  }
  return colors.grayScale.gray20;
};