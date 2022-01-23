import React, { useEffect, useState } from "react";
import { Visible } from "react-grid-system";
import { Center, Container } from "../../../components/styled/Utils.styled";
import { HomepageContainer, Button } from "../styled/Homepage.styled";

const Homepage = () => {
    const [position, setPosition] = useState({ lat: null, lng: null });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            });
        });
    }, []);

    return (
        <Container>
            <Center>
                <HomepageContainer>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className="left">
                            <h1>
                                Feel safe,
                                <br />
                                <span>Anywhere</span> & <span>any time</span>.
                            </h1>
                            <h2>Help your local community feel safer.</h2>

                            <Button
                                to={`/map?lat=${position.lat}&lng=${position.lng}`}
                            >
                                Get started
                            </Button>
                        </div>
                        <Visible lg xl>
                            <div className="right">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/home-illustration.svg`}
                                    alt="city illustration"
                                />
                            </div>
                        </Visible>
                    </div>
                    <p className="warning">
                        Be careful, the data on the website is created by users
                        and might not always be true.
                    </p>
                </HomepageContainer>
            </Center>
        </Container>
    );
};

export default Homepage;
