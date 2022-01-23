function toDate(timestamp) {
    const date = new Date(timestamp * 1000)
    const offset = date.getTimezoneOffset();
    const formatted = new Date(date.getTime() - offset * 60 * 1000);
    return formatted.toISOString().split("T")[0];
}

export default toDate;
