import './App.css';
import {
    Container,
    Tab,
    Tabs
} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Explorer from "./components/Explorer";

function App() {
    return (
        <div className="App">
            <Container maxWidth="xl">
                <Tabs centered sx={{ position: "relative" }}>
                    <Tab label="Explorer"/>
                    <Tab label="Burner"/>
                    <Tab label="Multisend"/>
                    <Tab label="Settings" sx={{ position: "absolute", right: "0px" }}/>
                </Tabs>
                <Explorer />
            </Container>
        </div>
    );
}

export default App;
