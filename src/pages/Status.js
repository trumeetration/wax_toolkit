import {Button, Grid} from "@mui/material";
import WalletStatusCard from "../components/WalletStatusCard";
import {useEffect, useState} from "react";


function Status(props) {
    const [addressList, setAddressList] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('addressList')).map(el => {
            return {
                id: el.id,
                address: el.address,
                balance: 0,
                cpu_staked: 0,
                net_staked: 0,
                other_staked: 0,
                cpu: {
                    busy: 0,
                    total: 0
                },
                ram: {
                    busy: 0,
                    total: 0
                },
                net: {
                    busy: 0,
                    total: 0
                },
            }
        });
        setAddressList(data);
    }, [])

    return (
        <div>
            <div style={{display: "flex", justifyContent: "flex-end", paddingRight: "40px", marginBottom: "15px"}}>
                <Button variant="outlined">Check</Button>
            </div>
            <Grid container spacing="30px" sx={{marginLeft: "0px", justifyContent: "start"}}>
                {!!addressList.length && addressList.map(res => {
                    return <WalletStatusCard key={res.id} data={res}/>
                })}
            </Grid>
        </div>
    )
}

export default Status;