import React, { useEffect } from "react";
import { Visible } from "react-grid-system";
import { Center, Container } from "../../../components/styled/Utils.styled";
import { HomepageContainer, Button } from "../styled/Homepage.styled";

const Homepage = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            sessionStorage.setItem(
                "position",
                JSON.stringify({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                })
            );
        });
    });

    const handleClick = () => {
        console.log(sessionStorage.getItem("position"));
    };

    return (
        <Container>
            <Center>
                <HomepageContainer>
                    <div className="left">
                        <h1>
                            Feel safe
                            <br />
                            <span>Anywhere</span> & <span>any time</span>.
                        </h1>
                        <h2>Help your local community feel safer.</h2>

                        <Button onClick={handleClick}>Get started</Button>
                    </div>
                    <Visible lg xl>
                        <div className="right">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/home-illustration.svg`}
                                alt="city illustration"
                            />
                        </div>
                    </Visible>
                </HomepageContainer>
            </Center>
        </Container>
    );
};

export default Homepage;
