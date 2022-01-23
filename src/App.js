import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NotFound from "./NotFound";
import Homepage from "./pages/homepage/components/Homepage";
import Map from "./pages/map/components/Map";

function App() {
    const theme = {
        mainColors: {
            mainGreen: "#40916c",
            secondaryGreen: "#1b4332",
            tertiaryGreen: "#B7E4C7",
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
