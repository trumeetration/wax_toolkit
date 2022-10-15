import {Box, Card, CardMedia, Checkbox, Divider, Typography} from "@mui/material";


function AssetCard() {
    return (
        <Card variant="outlined" sx={{width: "200px", position: "relative"}}>
            {/*<Checkbox size="small" sx={{position: "absolute", left: 0, top: 0, padding: "8px 10px"}}/>*/}
            <CardMedia
                sx={{padding: "10px 10px", width: "auto", margin: "auto"}}
                component="img"
                height="160px"
                image="https://resizer.atomichub.io/images/v1/preview?ipfs=QmZuVSGDGXPM1Jqk8bLjBH16cLjAbtGDRxW3d9D6VsAnik&size=370"
                alt="No image"
            />
            <Divider />
            <Typography textAlign="center">
                Collection a
            </Typography>
            <Divider />
            <Typography variant="h6" component="div" sx={{ margin: "0px 15px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                Clown with crazy chips
            </Typography>
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                <Box sx={{ backgroundColor: "#00A6A6", borderRadius: "4px 0 0 0", width: "70px", textAlign: "center"}}>
                    <Typography variant="caption" sx={{ margin: "0 5px" }}>
                        #123781
                    </Typography>
                </Box>
            </div>
        </Card>
    )
}

export default AssetCard;