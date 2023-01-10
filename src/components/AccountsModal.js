import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addAddressList, setNewAddressList} from "../redux/actions/settingsActions";
import uniqid from "uniqid";

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

function AccountsModal({open, setOpenModal}) {
    const [data, setData] = useState("");
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        setData("");
        setOpenModal(false);
    }

    const handleChangeData = (e) => {
        setData(e.target.value);
    }

    const handleAddNewAddressList = () => {
        const splitArr = data.split('\n');
        const arr = splitArr.map(address => {
            const id = uniqid();
            return {
                id,
                address
            }
        })
        dispatch(addAddressList(arr));
        setData("");
        setOpenModal(false);
    }

    const handleSetNewAddressList = () => {
        const splitArr = data.split('\n');
        const arr = splitArr.map(address => {
            const id = uniqid();
            return {
                id,
                address
            }
        })
        dispatch(setNewAddressList(arr));
        setData("");
        setOpenModal(false);
    }

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
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
                    autoFocus
                    value={data}
                    onChange={handleChangeData}
                    placeholder="bumbalumba35
bumbalumba34
wa1xw.wam
wakgw.wam
waaiw.wam
wazxw.wam
hwkxw.wam"
                />
                <div style={{display: "flex", justifyContent: "start", position: "relative"}}>
                    <Button onClick={handleAddNewAddressList} variant="outlined" sx={{marginTop: "10px", marginRight: "10px"}}>
                        Add
                    </Button>
                    <Button onClick={handleSetNewAddressList} variant="outlined" color="secondary" sx={{marginTop: "10px", marginRight: "10px"}}>
                        Save as new
                    </Button>
                    <Button variant="outlined" color="error"
                            onClick={handleCloseModal}
                            sx={{marginTop: "10px", position: "absolute", right: "0px"}}>
                        Close
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default AccountsModal;