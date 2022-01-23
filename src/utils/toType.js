function toType(typeIndex) {
    switch (typeIndex) {
        case 0:
            return "Sexual harrasment";
        case 1:
            return "Robbery";
        default:
            return "Unknown";
    }
}

export default toType;
