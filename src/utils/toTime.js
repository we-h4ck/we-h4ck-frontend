function toTime(timeIndex) {
    let time = null;
    try {
        time = parseInt(timeIndex, 10);
    } catch (error) {
        time = timeIndex;
    }

    switch (time) {
        case 0:
            return "Between 7am and 12pm";
        case 1:
            return "Between 7am and 12pm";
        case 2:
            return "Between 10pm and 7am";
        default:
            return "Unknown";
    }
}

export default toTime;
