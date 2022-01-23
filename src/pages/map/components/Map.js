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
import {
    Button,
    HomeButton,
    MapContainer,
    ModalIcon,
} from "../styled/Map.styled";
import Modal from "./Modal";
import toTime from "../../../utils/toTime";

const API_KEY_GOOGLE_MAPS = "AIzaSyB_B7WCktnIUtJz8Y2LIT1qTBDCotE1cE4";

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
    const [startConfig, setStartConfig] = useState("");
    const [selected, setSelected] = useState("");
    const [crimes, setCrimes] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const { lat, lng } = JSON.parse(sessionStorage.getItem("position"));

        setStartConfig({
            center: { lat: lat || 0, lng: lng || 0 },
            zoom: lat && lng ? 10 : 2,
        });

        fetch("/api/get-crimes")
            .then(r => r.json())
            .then(r => {
                setCrimes(r);
                setLoading(false);
            });
    }, []);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: API_KEY_GOOGLE_MAPS,
        libraries: librairies,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div>
            {!isLoading && (
                <MapContainer>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={startConfig.zoom}
                        center={startConfig.center}
                        options={options}
                    >
                        {crimes.map(crime => {
                            return (
                                <Marker
                                    // eslint-disable-next-line no-underscore-dangle
                                    key={crime._id}
                                    position={{
                                        lat: crime.lat,
                                        lng: crime.lng,
                                    }}
                                    onClick={() => setSelected(crime)}
                                />
                            );
                        })}

                        {selected ? (
                            <InfoWindow
                                position={{
                                    lat: selected.lat,
                                    lng: selected.lng,
                                }}
                                onCloseClick={() => {
                                    setSelected(null);
                                }}
                            >
                                <div style={{ color: "black" }}>
                                    <h1>Crime details</h1>
                                    <p>
                                        <span>Date</span>
                                        <br />
                                        <ModalIcon className="far fa-calendar-alt" />{" "}
                                        {toDate(selected.timestamp)}
                                    </p>
                                    <p>
                                        <span>Time</span>
                                        <br />
                                        <ModalIcon className="far fa-clock" />{" "}
                                        {toTime(selected.time)}
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

                    <Button type="button" onClick={() => setShowModal(true)}>
                        Report a crime
                    </Button>

                    <HomeButton to="/">
                        <i className="fas fa-home" />
                    </HomeButton>

                    <Modal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        setCrimes={setCrimes}
                        API_KEY_GOOGLE_MAPS={API_KEY_GOOGLE_MAPS}
                    />
                </MapContainer>
            )}
        </div>
    );
};

export default Map;
