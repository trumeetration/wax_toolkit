import {Button, Divider, Grid, IconButton, InputBase, Paper, Typography} from "@mui/material";
import AccountCard from "../components/AccountCard";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import AccountsModal from "../components/AccountsModal";
import {useDispatch, useSelector} from 'react-redux';
import {addNewAddress, clearAddressArr, setEndpoint, setPrivateKey} from "../redux/actions/settingsActions";
import {useState} from 'react';
import uniqid from "uniqid";

function Settings() {
    const [endpointInput, setEndpointInput] = useState('');
    const [privateKeyInput, setPrivateKeyInput] = useState('');
    const [newAddressInput, setNewAddressInput] = useState('');

    const dispatch = useDispatch();

    const handleInputEndpoint = (e) => {
        setEndpointInput(e.target.value);
    }

    const handleSubmitEndpoint = (e) => {
        e.preventDefault();
        dispatch(setEndpoint(endpointInput));
        setEndpointInput("");
    }

    const endpointStoreValue = useSelector( state => {
        const { settingsReducer } = state;
        return settingsReducer.endpoint;
    })

    const handleInputPrivateKey = (e) => {
        setPrivateKeyInput(e.target.value);
    }

    const handleSubmitPrivateKey = (e) => {
        e.preventDefault();
        dispatch(setPrivateKey(privateKeyInput));
        setPrivateKeyInput("");
    }

    const privateKeyStoreValue = useSelector( state => {
        const { settingsReducer } = state;
        const slicedPrivateKey = settingsReducer.privateKey.slice(-5);
        return slicedPrivateKey ? "PVT...." + slicedPrivateKey : slicedPrivateKey;
    })

    const handleInputNewAddress = (e) => {
        setNewAddressInput(e.target.value);
    }

    const handleSubmitNewAddress = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(addNewAddress(newAddressInput, id));
        setNewAddressInput("");
    }

    const handleClearAddressArr = (e) => {
        e.preventDefault();
        dispatch(clearAddressArr());
    }

    const addressArray = useSelector(state => {
        const { settingsReducer } = state;
        console.log(settingsReducer);
        return settingsReducer.addressArray;
    })

    return (
        <div>
            <div>
                <Typography variant="h6">API Endpoint</Typography>
                <Typography variant="caption">Current endpoint is {endpointStoreValue ? endpointStoreValue : "EMPTY"}</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, alignSelf: "end", marginBottom: "10px" }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="https://wax.greymass.com"
                        value={endpointInput}
                        onChange={handleInputEndpoint}
                        onSubmit={handleSubmitEndpoint}
                    />
                    <IconButton onClick={handleSubmitEndpoint} type="submit" sx={{ p: '10px' }}>
                        <CheckIcon/>
                    </IconButton>
                </Paper>
            </div>
            <Divider/>
            <div>
                <Typography variant="h6">Accounts list</Typography>
                <Paper sx={{ width: "100%", maxHeight:"300px", backgroundColor: "azure", marginTop: "10px", marginBottom: "10px", overflowY: "auto" }}>
                    <Grid container spacing="10px" sx={{ padding: "10px" }}>
                        { !!addressArray.length && addressArray.map( res => {
                            return <AccountCard key={res.id} data={res} />
                        }) }
                    </Grid>
                </Paper>
                <div style={{ display: "flex", justifyContent: "start", marginBottom: "10px" }}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200, alignSelf: "end" }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Wallet address"
                            value={newAddressInput}
                            onChange={handleInputNewAddress}
                            onSubmit={handleSubmitNewAddress}
                        />
                        <IconButton onClick={handleSubmitNewAddress} type="submit" sx={{ p: '10px' }}>
                            <AddIcon/>
                        </IconButton>
                    </Paper>
                    <Button variant="outlined" sx={{ marginLeft: "10px" }}>
                        Add many
                    </Button>
                    <Button onClick={handleClearAddressArr} variant="outlined" color="error" sx={{ marginLeft: "10px" }}>
                        Clear all
                    </Button>
                </div>
            </div>
            <Divider/>
            <div>
                <Typography variant="h6">Main private key</Typography>
                <Typography variant="caption">Current key is {privateKeyStoreValue ? privateKeyStoreValue : "NOT SET"}</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500, alignSelf: "end" }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Private key"
                        value={privateKeyInput}
                        onChange={handleInputPrivateKey}
                        onSubmit={handleSubmitPrivateKey}
                    />
                    <IconButton onClick={handleSubmitPrivateKey} type="submit" sx={{ p: '10px' }}>
                        <CheckIcon/>
                    </IconButton>
                </Paper>
            </div>
            <AccountsModal/>
        </div>
    )
}

export default Settings;