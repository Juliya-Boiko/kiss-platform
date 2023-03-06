import { status } from "constants/status";

export const statusSorting = (items) => {
    const urgent = items.filter(item => item.status === status.URGENTLY);
    const progress = items.filter(item => item.status === status.IN_PROGRESS);
    const paused = items.filter(item => item.status === status.PAUSED);
    const done = items.filter(item => item.status === status.DONE);
    const sorted = [...urgent, ...progress, ...paused, ...done];
    return sorted;
};