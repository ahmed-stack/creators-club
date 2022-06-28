import moment from "moment";

export const calculateTime = (time) => {
        let currentTime = moment();
        let previousTime = moment(time);

        let diff = currentTime.diff(previousTime, "months")
        return diff;
}