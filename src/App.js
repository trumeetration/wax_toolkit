import './App.css';
import {
    Box, Button,
    Card,
    CardContent, CardMedia, Checkbox,
    Container, Divider, Grid, IconButton, InputBase,
    List,
    ListItem, ListItemButton, ListItemIcon, ListItemText, Paper,
    Stack,
    Tab, TablePagination,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function AssetCard() {
    return (
        <Card variant="outlined" sx={{width: "200px", position: "relative"}}>
            <Checkbox size="small" sx={{position: "absolute", left: 0, top: 0, padding: "8px 10px"}}/>
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


function App() {
    return (
        <div className="App">
            <Container maxWidth="xl">
                <Box>
                    <Tabs centered>
                        <Tab label="Explorer"/>
                        <Tab label="Burner"/>
                        <Tab label="Multisend"/>
                    </Tabs>
                </Box>
                <Stack
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={4}
                >
                    <Card variant="outlined" sx={{
                        width: 250,
                        height: 300
                    }}>
                        <CardContent>
                            <Typography>
                                Collections
                            </Typography>
                            <List sx={{
                                width: "100%"
                            }}>
                                <ListItem disablePadding>
                                    <ListItemButton dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Collection 1"/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Collection 2"/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Collection 3"/>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                    <Stack sx={{width: "100%"}} spacing={2}>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, alignSelf: "end"}}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1}}
                                placeholder="Wallet address"
                            />
                            <IconButton type="submit" sx={{ p: '10px'}}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        <Grid container spacing={6}>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                            <Grid item>
                                <AssetCard />
                            </Grid>
                        </Grid>
                        <TablePagination
                            component="div"
                            count={100}
                        />
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}

export default App;
