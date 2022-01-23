import React, { useEffect, useState } from "react";
import { Visible } from "react-grid-system";
import { Center, Container } from "../../../components/styled/Utils.styled";
import { HomepageContainer, Button } from "../styled/Homepage.styled";

const Homepage = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        if (navigator.permissions && navigator.permissions.query) {
            navigator.permissions.query({ name: "geolocation" }).then((r) => {
                if (r.state === "prompt" || r.state === "granted") {
                    navigator.geolocation.getCurrentPosition((pos) => {
                        sessionStorage.setItem(
                            "position",
                            JSON.stringify({
                                lat: pos.coords.latitude,
                                lng: pos.coords.longitude,
                            })
                        );
                    });
                }
            });
        } else {
            sessionStorage.setItem(
                "position",
                JSON.stringify({
                    lat: 10,
                    lng: 10,
                })
            );
        }

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
                                Be careful, the data on the website is generated
                                by users and might not always be accurate.
                            </p>
                        </HomepageContainer>
                    </Center>
                </Container>
            )}
        </div>
    );
};

export default Homepage;
