import {setActivePage} from "../redux/actions";
import {Container, Tab, Tabs} from "@mui/material";
import {BrowserRouter, Navigate, Route, Routes, Link} from "react-router-dom";
import Explorer from "../pages/Explorer";
import Status from "../pages/Status";
import Settings from "../pages/Settings";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as React from 'react';

const WaxToolLayout = ({setActivePage}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Container maxWidth="xl">
                    <Tabs value={value} onChange={handleChange} centered sx={{ position: "relative" }}>
                        <Tab component={Link} label="Explorer" to="/"/>
                        <Tab component={Link} label="Resources" to="/resources"/>
                        <Tab component={Link} label="Settings" to="/settings" sx={{ position: "absolute", right: "0px" }}/>
                    </Tabs>
                    <Routes>
                        <Route exact path="/" element={<Explorer />}/>
                        <Route exact path="/resources" element={<Status />}/>
                        <Route exact path="/settings" element={<Settings />}/>
                        <Route path="*" element={<Navigate replace to="/" />}/>
                    </Routes>
                </Container>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    const info = state.activePageReducer;
    return {info};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setActivePage},
        dispatch
    );
}

export const WaxTool = connect(
    mapStateToProps,
    mapDispatchToProps
)(WaxToolLayout);