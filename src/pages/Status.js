import {Grid} from "@mui/material";
import WalletStatusCard from "../components/WalletStatusCard";


function Status(props) {
    return (
        <div>
            <Grid container spacing="30px" sx={{marginLeft: "0px", justifyContent: "start"}}>
                <Grid item>
                    <WalletStatusCard/>
                </Grid>
                <Grid item>
                    <WalletStatusCard/>
                </Grid>
                <Grid item>
                    <WalletStatusCard/>
                </Grid>
                <Grid item>
                    <WalletStatusCard/>
                </Grid>
                <Grid item>
                    <WalletStatusCard/>
                </Grid>
                <Grid item>
                    <WalletStatusCard/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Status;