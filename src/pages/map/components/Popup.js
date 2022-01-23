/* eslint-disable no-console */
import React, { useState } from "react";
import toTimestamp from "../../../utils/toTimestamp";
import { Button, Box, PopupContainer } from "../styled/Popup.styled";

const Popup = ({ setCrimes, lat, lng }) => {
    const [date, setDate] = useState(new Date());
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 100);
    const minDateFormatted = `${minDate.getFullYear()}-${
        minDate.getMonth() + 1
    }-${minDate.getDate()}`;

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 1);
    const maxDateFormatted = `${maxDate.getFullYear()}-${
        maxDate.getMonth() + 1
    }-${maxDate.getDate()}`;

    const handleClick = () => {
        console.log(
            `Timestamp: ${toTimestamp(
                date
            )}\nLattitude: ${lat}\nLongitude: ${lng}\nType: ${type}\nDescription: ${description}`
        );

        if (
            date &&
            toTimestamp(date) <= toTimestamp(new Date()) &&
            lat &&
            lng &&
            type
        ) {
            fetch("http://localhost:5000/api/new-crime", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    timestamp: toTimestamp(date),
                    lat,
                    lng,
                    type,
                    description,
                }),
            })
                .then((r) => r.json())
                .then((r) => {
                    console.log("Successfully sent: \n", r);
                })
                .then(() => {
                    fetch("http://localhost:5000/api/get-crimes")
                        .then((r) => r.json())
                        .then((r) => setCrimes(r));
                });
        } else {
            console.log("Missing a parameter or date is invalid!");
        }
    };

    return (
        <PopupContainer>
            <Box>
                <h1>Add crime details</h1>
                <p>
                    Date <span>*</span>
                </p>
                <input
                    type="date"
                    value={date}
                    onChange={(ev) => setDate(ev.target.value)}
                    min={minDateFormatted}
                    max={maxDateFormatted}
                />
                <p>
                    Type of crime <span>*</span>
                </p>
                <input
                    type="text"
                    value={type}
                    onChange={(ev) => setType(ev.target.value)}
                />
                <p>Description</p>
                <input
                    type="text"
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                />
                <Button type="button" onClick={handleClick}>
                    Submit
                </Button>
            </Box>
        </PopupContainer>
    );
};

export default Popup;
