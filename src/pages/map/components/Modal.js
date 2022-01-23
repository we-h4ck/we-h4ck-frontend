/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import { typeOptions } from "../../../data/types";
import toTimestamp from "../../../utils/toTimestamp";
import {
    Background,
    Button,
    CloseModalButton,
    ModalContainer,
} from "../styled/Modal.styled";

const Modal = ({ showModal, setShowModal, API_KEY_GOOGLE_MAPS, setCrimes }) => {
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [time, setTime] = useState("");
    const [adress, setAdress] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const [error, setError] = useState(false);

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
    });

    useEffect(() => {
        setDate(new Date().toISOString());
    }, []);

    const handleClick = async () => {
        let lat = null;
        let lng = null;

        if (adress) {
            const adressJoined = adress.replace(/\s/g, "+");

            const coordsAdress = fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${adressJoined}&key=${API_KEY_GOOGLE_MAPS}`
            )
                .then(r => r.json())
                .then(r => {
                    if (r.results[0]) {
                        return r.results[0].geometry.location;
                    } else {
                        setAdress("");
                        setError(true);
                        return null;
                    }
                });

            ({ lat, lng } = await coordsAdress);
        }

        if (
            date &&
            toTimestamp(date) <= toTimestamp(new Date()) &&
            time &&
            lat &&
            lng &&
            type
        ) {
            fetch("http://192.168.86.53:5000/api/new-crime", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    timestamp: toTimestamp(date),
                    time,
                    lat,
                    lng,
                    type,
                    description,
                }),
            })
                .then(r => r.json())
                .then(() => {
                    fetch("http://192.168.86.53:5000/api/get-crimes")
                        .then(r => r.json())
                        .then(r => {
                            setCrimes(r);
                            setError(false);
                            setShowModal(false);
                        });
                });
        } else {
            setError(true);
        }
    };

    return (
        <div>
            {showModal && (
                <Background>
                    <animated.div style={animation}>
                        <ModalContainer>
                            <div className="cross">
                                <CloseModalButton
                                    aria-label="Close modal"
                                    onClick={() => setShowModal(false)}
                                />
                            </div>
                            <h1>Add crime details</h1>
                            <div className="fields">
                                <div className="field date-field">
                                    <p>
                                        Date <span className="required">*</span>
                                    </p>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={ev =>
                                            setDate(ev.target.value)
                                        }
                                    />
                                </div>
                                <div className="field dropdown-field">
                                    <p>
                                        Time period{" "}
                                        <span className="required">*</span>
                                    </p>
                                    <select
                                        name="crimes"
                                        id="crime-select"
                                        value={time}
                                        onChange={ev =>
                                            setTime(ev.target.value)
                                        }
                                    >
                                        <option value="" disabled>
                                            Please choose an option
                                        </option>
                                        <option value="0">7am - 12pm</option>
                                        <option value="1">12pm - 10pm</option>
                                        <option value="2">10pm - 7am</option>
                                    </select>
                                </div>
                                <div div className="field text-field">
                                    <p>
                                        Adress{" "}
                                        <span className="required">*</span>
                                    </p>
                                    <input
                                        type="text"
                                        value={adress}
                                        onChange={ev =>
                                            setAdress(ev.target.value)
                                        }
                                        placeholder="City, postal code, adress, country, region, state..."
                                    />
                                </div>
                                <div className="field dropdown-field">
                                    <p>
                                        Type of crime{" "}
                                        <span className="required">*</span>
                                    </p>
                                    <select
                                        name="crimes"
                                        id="crime-select"
                                        value={type}
                                        onChange={ev =>
                                            setType(ev.target.value)
                                        }
                                    >
                                        <option value="" disabled>
                                            Please choose an option
                                        </option>
                                        {typeOptions.map(crime => {
                                            return (
                                                <option
                                                    key={crime.value}
                                                    value={crime.value}
                                                >
                                                    {crime.text}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="field text-field">
                                    <p>Description</p>
                                    <input
                                        type="text"
                                        value={description}
                                        onChange={ev =>
                                            setDescription(ev.target.value)
                                        }
                                        placeholder="A brief description of what happened..."
                                    />
                                </div>
                            </div>
                            <Button
                                error={error}
                                type="button"
                                onClick={handleClick}
                            >
                                Submit
                            </Button>
                        </ModalContainer>
                    </animated.div>
                </Background>
            )}
        </div>
    );
};

export default Modal;
