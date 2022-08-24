import {Box, Card, CardContent, CardMedia, Checkbox, Divider, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


function AccountCard() {
    return (
        <Card variant="outlined" sx={{position: "relative"}}>
            <div style={{padding: "10px", display: "flex", justifyContent: "space-between"}}>
                <Typography>wawdsadaw</Typography>
                <IconButton type="submit" sx={{padding: "0", marginLeft: "5px"}}>
                    <CloseIcon fontSize="small"/>
                </IconButton>
            </div>
        </Card>
    )
}

export default AccountCard;