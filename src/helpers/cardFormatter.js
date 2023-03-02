import { theme } from "style/theme";
import { status } from "constants/status";
import { MdDone, MdHourglassEmpty, MdFlashOn } from "react-icons/md";
import { AiOutlinePause } from "react-icons/ai";

export const cardFormatter = (array) => {
  const dataObj = {
    done: {
      amount: 0,
      icon: <MdDone size="25px" />,
      color: theme.colors.support.success
    },
    paused: {
      amount: 0,
      icon: <AiOutlinePause size="25" />,
      color: theme.colors.support.warning
    },
    progress: {
      amount: 0,
      icon: <MdHourglassEmpty size="25" />,
      color: theme.colors.support.message
    },
    urgently: {
      amount: 0,
      icon: <MdFlashOn size="25" />,
      color: theme.colors.support.error
    }
  };

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.status === status.DONE) {
      dataObj.done.amount += 1;
    }
    if (element.status === status.IN_PROGRESS) {
      dataObj.progress.amount += 1;
    }
    if (element.status === status.PAUSED) {
      dataObj.paused.amount +=1
    }
    if (element.status === status.URGENTLY) {
      dataObj.urgently.amount += 1;
    }
  }
  
  const dataArr = Object.entries(dataObj).map(item => {
    return {
      title: item[0],
      amount: item[1].amount,
      color: item[1].color,
      icon: item[1].icon
    }
  });
  
  return dataArr;
}