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
import Settings from "./components/Settings";
import Status from "./components/Status";
import AccountsModal from "./components/AccountsModal";
import Disperse from "./components/Disperse";

function App() {
    return (
        <div className="App">
            <Container maxWidth="xl">
                <Tabs centered sx={{ position: "relative" }}>
                    <Tab label="Explorer"/>
                    <Tab label="Resources"/>
                    <Tab label="Disperse"/>
                    <Tab label="Settings" sx={{ position: "absolute", right: "0px" }}/>
                </Tabs>
                {/*<Explorer />*/}
                {/*<Status />*/}
                {/*<Settings/>*/}
                {/*<AccountsModal/>*/}
                <Disperse/>
            </Container>
        </div>
    );
}

export default App;
