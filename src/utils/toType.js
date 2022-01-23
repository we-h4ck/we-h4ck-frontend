function toType(typeIndex) {
    let type = null;
    try {
        type = parseInt(typeIndex, 10);
    } catch (error) {
        type = typeIndex;
    }

    switch (type) {
        case 0:
            return "Violence and Sexual Offences";
        case 1:
            return "Robbery";
        case 2:
            return "Anti-Social Behaviour";
        case 3:
            return "Motor Vehicle Theft";
        case 4:
            return "Burglary";
        case 5:
            return "Criminal Damage and Arson";
        case 6:
            return "Drugs";
        case 7:
            return "Weapon Law Violations";
        case 8:
            return "Shoplifting";
        case 9:
            return "Vehicle Crime";
        case 10:
            return "Destruction/Damage/Vandalism of Property";
        case 11:
            return "Kidnapping/Abduction";
        case 12:
            return "Intimidation";
        case 13:
            return "Pocket-Picking";
        case 14:
            return "Assisting or Promoting Prostitution";
        case 15:
            return "Other Theft";
        case 16:
            return "Other Crime";
        default:
            return "Unknown";
    }
}

export default toType;
