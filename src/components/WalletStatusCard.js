import {
    Button,
    Card,
    Divider,
    Grid,
    Stack,
    Typography
} from "@mui/material";
import {LinearProgress} from "@mui/material";


function WalletStatusCard({ data }) {
    console.log(data);

    return (
        <Grid item>
            <Card variant="outlined" sx={{width: "330px", position: "relative"}}>
                <Typography variant="h6" align="center">{data.address}</Typography>
                <Divider/>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
                    <div style={{ height: "100%", marginTop: "auto", marginBottom: "auto" }}>
                        <Typography variant="body2" gutterBottom>Balance: {data.balance} WAX</Typography>
                        <Typography variant="body2" gutterBottom>CPU: {data.cpu_staked} WAX</Typography>
                        <Typography variant="body2" gutterBottom>NET: {data.net_staked} WAX</Typography>
                        <Typography variant="body2">By Others: {data.other_staked} WAX</Typography>
                    </div>
                    <Stack sx={{ width: '45%', color: 'grey.500' }} spacing={1}>
                        <div>
                            <Typography display="block" variant="caption" align="center">{data.cpu.busy}ms/{data.cpu.total}ms | CPU</Typography>
                            <LinearProgress variant="determinate" value={50} />
                        </div>
                        <div>
                            <Typography display="block" variant="caption" align="center">{data.ram.busy}KB/{data.ram.total}KB | RAM</Typography>
                            <LinearProgress variant="determinate" value={50} />
                        </div>
                        <div>
                            <Typography display="block" variant="caption" align="center">{data.net.busy}KB/{data.net.total}KB | NET</Typography>
                            <LinearProgress variant="determinate" value={50} />
                        </div>
                        <Button variant="outlined" size="small">Add</Button>
                    </Stack>
                </div>
            </Card>
        </Grid>
    )
}

export default WalletStatusCard;