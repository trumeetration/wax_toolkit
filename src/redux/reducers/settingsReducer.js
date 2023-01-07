import {
    SETTINGS_INPUT_ENDPOINT,
    SETTINGS_INPUT_NEW_ADDRESS,
    SETTINGS_INPUT_PRIVATE_KEY
} from "../types";

const initialState = {
    endpoint: '',
    newAddress: '',
    privateKey: ''
}

export const settingsReducer = (state  = initialState, action) => {
    console.log('SETTINGS reducer > ', action)

    switch (action.type) {

        case SETTINGS_INPUT_ENDPOINT:
            return {
                ...state,
                endpoint: action.url
            }

        case SETTINGS_INPUT_NEW_ADDRESS:
            return {
                ...state,
                newAddress: action.address
            }

        case SETTINGS_INPUT_PRIVATE_KEY:
            return {
                ...state,
                privateKey: action.privateKey
            }

        default:
            return state;
    }
}