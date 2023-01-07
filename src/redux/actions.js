import {
    EXPLORER_INPUT_ADDRESS,
    SET_ACTIVE_PAGE,
    SETTINGS_INPUT_ENDPOINT,
    SETTINGS_INPUT_NEW_ADDRESS,
    SETTINGS_INPUT_PRIVATE_KEY
} from "./types";

export const setActivePage = (pageName) => ({
    type: SET_ACTIVE_PAGE,
    pageName
})

export const explorerInputAddress = (text) => ({
    type: EXPLORER_INPUT_ADDRESS,
    text
})

export const settingsInputEndpoint = (url) => ({
    type: SETTINGS_INPUT_ENDPOINT,
    url
})

export const settingsInputNewAddress = (address) => ({
    type: SETTINGS_INPUT_NEW_ADDRESS,
    address
})

export const settingsInputPrivateKey = (privateKey) => ({
    type: SETTINGS_INPUT_PRIVATE_KEY,
    privateKey
})