import {Box, Button, Modal, TextField, Typography} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

function AccountsModal(props) {
    return (
        <Modal
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Accounts list
                </Typography>
                <TextField
                    multiline
                    rows={12}
                    fullWidth
                    placeholder="bumbalumba35
bumbalumba34
wa1xw.wam
wakgw.wam
waaiw.wam
wazxw.wam
hwkxw.wam"
                />
                <div style={{ display: "flex", justifyContent: "start", position: "relative" }}>
                    <Button variant="outlined" sx={{ marginTop: "10px", marginRight: "10px" }}>
                        Add
                    </Button>
                    <Button variant="outlined" color="secondary" sx={{ marginTop: "10px", marginRight: "10px" }}>
                        Save as new
                    </Button>
                    <Button variant="outlined" color="error" sx={{ marginTop: "10px", position: "absolute", right: "0px" }}>
                        Close
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default AccountsModal;