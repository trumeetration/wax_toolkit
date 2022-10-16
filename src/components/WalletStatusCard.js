import {Box, Button, Card, CardMedia, Checkbox, CircularProgress, Divider, Stack, Typography} from "@mui/material";
import {LinearProgress} from "@mui/material";


function WalletStatusCard() {
    return (
        <Card variant="outlined" sx={{width: "330px", position: "relative"}}>
            <Typography variant="h6" align="center">bumbalumba35</Typography>
            <Divider/>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
                <div style={{ height: "100%", marginTop: "auto", marginBottom: "auto" }}>
                    <Typography variant="body2" gutterBottom>Balance: 8,153.01 WAX</Typography>
                    <Typography variant="body2" gutterBottom>CPU: 100,000.01 WAX</Typography>
                    <Typography variant="body2" gutterBottom>NET: 0 WAX</Typography>
                    <Typography variant="body2">By Others: 0 WAX</Typography>
                </div>
                <Stack sx={{ width: '45%', color: 'grey.500' }} spacing={1}>
                    <div>
                        <Typography display="block" variant="caption" align="center">300ms/630ms | CPU</Typography>
                        <LinearProgress variant="determinate" value={50} />
                    </div>
                    <div>
                        <Typography display="block" variant="caption" align="center">3KB/6KB | RAM</Typography>
                        <LinearProgress variant="determinate" value={50} />
                    </div>
                    <div>
                        <Typography display="block" variant="caption" align="center">3KB/6KB | NET</Typography>
                        <LinearProgress variant="determinate" value={50} />
                    </div>
                    <Button variant="outlined" size="small">Add</Button>
                </Stack>
            </div>
        </Card>
    )
}

export default WalletStatusCard;