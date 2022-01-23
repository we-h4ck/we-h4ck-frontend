import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NotFound from "./NotFound";
import Homepage from "./pages/homepage/components/Homepage";
import Map from "./pages/map/components/Map";

function App() {
    const theme = {
        mainColors: {
            mainBlue: "#023E7D",
            ctaPrimaryBlue: "#0466C8",
            ctaSecondaryBlue: "#4A77A4",
            lightBlue: "#5DA3EA",
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={Homepage} />

                <Route exact path="/map" component={Map} />

                <Route component={NotFound} />
            </Switch>
        </ThemeProvider>
    );
}

export default App;
