/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from "@react-google-maps/api";
import mapStyles from "../mapStyles";
import toDate from "../../../utils/toDate";
import toType from "../../../utils/toType";
import { Button, MapContainer, PopupIcon } from "../styled/Map.styled";
import Popup from "./Popup";
import { Fade } from "../styled/Popup.styled";

const API_KEY = "AIzaSyB_B7WCktnIUtJz8Y2LIT1qTBDCotE1cE4";

const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};

const librairies = ["places"];

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    minZoom: 2,
};

const Map = () => {
    const [startConfig, setStartConfig] = useState(null);
    const [selected, setSelected] = useState(null);
    const [crimes, setCrimes] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);

        const lat = parseFloat(queryParams.get("lat"));
        const lng = parseFloat(queryParams.get("lng"));

        console.log("Lattitude is: ", lat, " and longitude is: ", lng);

        setStartConfig({
            center: { lat: lat || 0, lng: lng || 0 },
            zoom: lat && lng ? 10 : 2,
        });

        fetch("http://localhost:5000/api/get-crimes")
            .then((r) => r.json())
            .then((r) => setCrimes(r));
    }, []);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: API_KEY,
        libraries: librairies,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <MapContainer>
            <GoogleMap
                className
                mapContainerStyle={mapContainerStyle}
                zoom={startConfig.zoom}
                center={startConfig.center}
                options={options}
            >
                {crimes.map((crime) => {
                    return (
                        <Marker
                            // eslint-disable-next-line no-underscore-dangle
                            key={crime._id}
                            position={{ lat: crime.lat, lng: crime.lng }}
                            onClick={() => setSelected(crime)}
                        />
                    );
                })}

                {selected ? (
                    <InfoWindow
                        position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => {
                            setSelected(null);
                        }}
                    >
                        <div style={{ color: "black" }}>
                            <h1>Crime details</h1>
                            <p>
                                <span>Date</span>
                                <br />
                                <PopupIcon className="far fa-calendar-alt" />{" "}
                                {toDate(selected.timestamp)}
                            </p>
                            <p>
                                <span>Type of crime</span>
                                <br />
                                {toType(selected.type)}
                            </p>
                            {selected.description && (
                                <p>
                                    <span>Description</span>
                                    <br />
                                    {selected.description}
                                </p>
                            )}
                        </div>
                    </InfoWindow>
                ) : null}
            </GoogleMap>

            <Button
                type="button"
                onClick={() =>
                    setIsPopupVisible((currVisibility) => !currVisibility)
                }
            >
                Report a crime
            </Button>

            <Fade out={isPopupVisible}>
                {" "}
                <Popup
                    setCrimes={setCrimes}
                    lat={startConfig.center.lat}
                    lng={startConfig.center.lng}
                />
            </Fade>
        </MapContainer>
    );
};

export default Map;
