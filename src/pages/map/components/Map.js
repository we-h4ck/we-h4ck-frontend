import React, { useEffect, useState } from "react";
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useLoadScript,
} from "@react-google-maps/api";
import mapStyles from "../mapStyles";
import crimesData from "../../../data/crimesData";
import toDate from "../../../utils/toDate";
import toType from "../../../utils/toType";

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

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);

        const lat = parseFloat(queryParams.get("lat"));
        const lng = parseFloat(queryParams.get("lng"));

        setStartConfig({
            center: { lat: lat || 0, lng: lng || 0 },
            zoom: lat && lng ? 10 : 2,
        });
    }, []);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: API_KEY,
        libraries: librairies,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div style={{ overflow: "hidden" }}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={startConfig.zoom}
                center={startConfig.center}
                options={options}
            >
                {crimesData.map((crime) => {
                    return (
                        <Marker
                            key={crime.id}
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
                            <h1>{toType(selected.type)}</h1>
                            <p>Date: {toDate(selected.timestamp)}</p>
                            <p>Description: {selected.description}</p>
                        </div>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        </div>
    );
};

export default Map;
