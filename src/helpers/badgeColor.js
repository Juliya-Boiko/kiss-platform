import { status } from "constants/status";
import { theme } from "style/theme";

const { success, message, warning, error } = theme.colors.support;

export const badgeColor = (string) => {
  if (string === status.DONE) {
    return { bgColor: '#0bb07b33', color: success}
  }
  if (string === status.IN_PROGRESS) {
    return { bgColor: '#4070f433', color: message}
  }
  if (string === status.PAUSED) {
    return { bgColor: '#ffad0d33', color: warning}
  }
  if (string === status.URGENTLY) {
    return { bgColor: '#f03d3d33', color: error}
  }
};