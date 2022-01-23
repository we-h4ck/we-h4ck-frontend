function toTimestamp(date) {
    const newDate = new Date(date).getTime() / 1000;
    return newDate;
}

export default toTimestamp;
