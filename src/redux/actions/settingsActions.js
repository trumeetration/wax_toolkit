import {
    SET_ENDPOINT,
    ADD_NEW_ADDRESS,
    SET_PRIVATE_KEY,
    CLEAR_ADDRESS_LIST,
    DELETE_ADDRESS, ADD_ADDRESS_LIST, SET_NEW_ADDRESS_LIST
} from "../types/settingsTypes";

export const setEndpoint = (url) => ({
    type: SET_ENDPOINT,
    url
})

export const addNewAddress = (address, id) => ({
    type: ADD_NEW_ADDRESS,
    data: {
        id,
        address
    }
})

export const setPrivateKey = (privateKey) => ({
    type: SET_PRIVATE_KEY,
    privateKey
})

export const clearAddressArr = () => ({
    type: CLEAR_ADDRESS_LIST
})

export const deleteAddress = (id) => ({
    type: DELETE_ADDRESS,
    id
})

export const addAddressList = (data) => ({
    type: ADD_ADDRESS_LIST,
    data
})

export const setNewAddressList = (data) => ({
    type: SET_NEW_ADDRESS_LIST,
    data
})
