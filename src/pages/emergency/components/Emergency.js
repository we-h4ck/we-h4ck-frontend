import React from "react";
import { Center, Container } from "../../../components/styled/Utils.styled";
import { Button, ButtonContainer } from "../styled/Emergency.styled";

const Emergency = () => {
    return (
        <Container>
            <Center>
                <ButtonContainer>
                    <h1>Emergency numbers</h1>

                    <Button
                        style={{ backgroundColor: "lightblue" }}
                        type="button"
                    >
                        Fire, Police & ambulance : 911
                    </Button>
                    <Button style={{ backgroundColor: "green" }} type="button">
                        Montréal police : 514 280 2222
                    </Button>
                    <Button style={{ backgroundColor: "red" }} type="button">
                        Quebec security : 514 310 4141
                    </Button>
                    <Button
                        style={{ backgroundColor: "lightgreen" }}
                        type="button"
                    >
                        Infos santé : 811
                    </Button>
                </ButtonContainer>
            </Center>
        </Container>
    );
};

export default Emergency;
