import React, { useEffect, useState } from "react";
import { Visible } from "react-grid-system";
import { Center, Container } from "../../../components/styled/Utils.styled";
import { HomepageContainer, Button } from "../styled/Homepage.styled";

const Homepage = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            sessionStorage.setItem(
                "position",
                JSON.stringify({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                })
            );
        });
        setLoading(false);
    }, []);

    return (
        <div>
            {!isLoading && (
                <Container>
                    <Center>
                        <HomepageContainer>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <div className="left">
                                    <h1>
                                        Feel safe,
                                        <br />
                                        <span>Anywhere</span> &{" "}
                                        <span>any time</span>.
                                    </h1>
                                    <h2>
                                        Help your local community feel safer.
                                    </h2>

                                    <Button to="/map">Get started</Button>
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
                                Be careful, the data on the website is created
                                by users and might not always be true.
                            </p>
                        </HomepageContainer>
                    </Center>
                </Container>
            )}
        </div>
    );
};

export default Homepage;
