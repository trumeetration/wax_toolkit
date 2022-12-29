import {
    Box,
    Button,
    Divider,
    Grid,
    IconButton,
    InputBase,
    Modal,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import AccountCard from "../components/AccountCard";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import AccountsModal from "../components/AccountsModal";

function Settings(props) {
    return (
        <div>
            <div>
                <Typography variant="h6">API Endpoint</Typography>
                <Typography variant="caption">Current endpoint is https://wax.eosrio.io</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, alignSelf: "end", marginBottom: "10px" }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="https://wax.greymass.com"
                    />
                    <IconButton type="submit" sx={{ p: '10px' }}>
                        <CheckIcon/>
                    </IconButton>
                </Paper>
            </div>
            <Divider/>
            <div>
                <Typography variant="h6">Accounts list</Typography>
                <Paper sx={{ width: "100%", maxHeight:"300px", backgroundColor: "azure", marginTop: "10px", marginBottom: "10px", overflowY: "auto" }}>
                    <Grid container spacing="10px" sx={{ padding: "10px" }}>
                        <Grid item>
                            <AccountCard />
                        </Grid>
                        <Grid item>
                            <AccountCard />
                        </Grid>
                        <Grid item>
                            <AccountCard />
                        </Grid>
                        <Grid item>
                            <AccountCard />
                        </Grid>
                        <Grid item>
                            <AccountCard />
                        </Grid>
                        <Grid item>
                            <AccountCard />
                        </Grid>

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
                        />
                        <IconButton type="submit" sx={{ p: '10px' }}>
                            <AddIcon/>
                        </IconButton>
                    </Paper>
                    <Button variant="outlined" sx={{ marginLeft: "10px" }}>
                        Add many
                    </Button>
                    <Button variant="outlined" color="error" sx={{ marginLeft: "10px" }}>
                        Clear all
                    </Button>
                </div>
            </div>
            <Divider/>
            <div>
                <Typography variant="h6">Main private key</Typography>
                <Typography variant="caption">Current key is EUIRASDJK12738S</Typography>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500, alignSelf: "end" }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Private key"
                    />
                    <IconButton type="submit" sx={{ p: '10px' }}>
                        <CheckIcon/>
                    </IconButton>
                </Paper>
            </div>
            <AccountsModal/>
        </div>
    )
}

export default Settings;