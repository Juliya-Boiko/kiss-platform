import { theme } from "style/theme";
import { status } from "constants/status";

export const chartFormatter = (array) => {
  const dataObj = {
    done: {
      value: 0,
      color: theme.colors.support.success
    },
    paused: {
      value: 0,
      color: theme.colors.support.warning
    },
    progress: {
      value: 0,
      color: theme.colors.support.message
    },
    urgently: {
      value: 0,
      color: theme.colors.support.error
    }
  };

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.status === status.DONE) {
      dataObj.done.value += 1;
    }
    if (element.status === status.IN_PROGRESS) {
      dataObj.progress.value += 1;
    }
    if (element.status === status.PAUSED) {
      dataObj.paused.value +=1
    }
    if (element.status === status.URGENTLY) {
      dataObj.urgently.value += 1;
    }
  }
  
  const dataArr = Object.entries(dataObj).map(item => {
    return {
      title: item[0],
      value: item[1].value,
      color: item[1].color,
    }
  });
  
  return dataArr;
}