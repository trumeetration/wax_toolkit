import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Checkbox, Grid, IconButton, InputBase,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText, Paper, Stack, TablePagination,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import AssetCard from "../components/AssetCard";


function Explorer(props) {
    return (
        <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing={4}
        >
            <Accordion sx={{width: "250px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>
                        Collections
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>

            <Stack sx={{width: "100%"}} spacing={2}>
                <Paper
                    component="form"
                    sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, alignSelf: "end"}}
                >
                    <InputBase
                        sx={{ml: 1, flex: 1}}
                        placeholder="Wallet address"
                    />
                    <IconButton type="submit" sx={{p: '10px'}}>
                        <SearchIcon/>
                    </IconButton>
                </Paper>
                <div sx={{display: "flex", justifyContent: "end"}}>
                    <Grid container spacing="47px" sx={{marginLeft: "0px"}}>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                        <Grid item>
                            <AssetCard/>
                        </Grid>
                    </Grid>
                </div>
                <TablePagination
                    component="div"
                    count={100}
                />
            </Stack>
        </Stack>
    );


}

export default Explorer;