import {Card, Grid, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


function AccountCard({ data }) {
    return (
        <Grid item>
            <Card variant="outlined" sx={{position: "relative"}}>
                <div style={{padding: "10px", display: "flex", justifyContent: "space-between"}}>
                    <Typography>{data.address}</Typography>
                    <IconButton type="submit" sx={{padding: "0", marginLeft: "5px"}}>
                        <CloseIcon fontSize="small"/>
                    </IconButton>
                </div>
            </Card>
        </Grid>
    )
}

export default AccountCard;