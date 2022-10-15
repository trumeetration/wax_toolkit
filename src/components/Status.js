import {Grid} from "@mui/material";
import AssetCard from "./AssetCard";
import WalletStatusCard from "./WalletStatusCard";


function Status(props) {
    return (
        <div>
            <Grid container spacing="47px" sx={{marginLeft: "0px"}}>
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