import {Button, Divider, Grid, IconButton, InputBase, Paper, TextField, Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AccountCard from "./AccountCard";
import AddIcon from "@mui/icons-material/Add";
import AccountsModal from "./AccountsModal";

function Disperse(props) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                    sx={{ width: "300px" }}
                    multiline
                    rows={8}
                    placeholder="bumbalumba35
bumbalumba34
wa1xw.wam
wakgw.wam
waaiw.wam
wazxw.wam
hwkxw.wam"
                />
                <TextField
                    id="outlined-number"
                    label="WAX"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ marginLeft: "10px" }}
                />
                <Button variant="contained" sx={{ marginLeft: "10px", height: "55px" }}>Disperse</Button>
            </div>
        </div>
    )
}

export default Disperse;