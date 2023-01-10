import {Card, Grid, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useDispatch} from "react-redux";
import {deleteAddress} from "../redux/actions/settingsActions";


function AccountCard({ data }) {
    const { id, address } = data;
    const dispatch = useDispatch();

    const handleDeleteAddress = (e) => {
        e.preventDefault();
        dispatch(deleteAddress(id));
    }

    return (
        <Grid item>
            <Card variant="outlined" sx={{position: "relative"}}>
                <div style={{padding: "10px", display: "flex", justifyContent: "space-between"}}>
                    <Typography>{address}</Typography>
                    <IconButton onClick={handleDeleteAddress} type="submit" sx={{padding: "0", marginLeft: "5px"}}>
                        <CloseIcon fontSize="small"/>
                    </IconButton>
                </div>
            </Card>
        </Grid>
    )
}

export default AccountCard;