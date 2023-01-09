import {SET_ENDPOINT, ADD_NEW_ADDRESS, SET_PRIVATE_KEY, CLEAR_ADDRESS_LIST} from "../types/settingsTypes";

const initialState = {
    endpoint: '',
    addressArray: [],
    privateKey: ''
}

export const settingsReducer = (state  = initialState, action) => {
    // console.log('SETTINGS reducer action > ', action)

    switch (action.type) {

        case SET_ENDPOINT:
            return {
                ...state,
                endpoint: action.url
            }

        case ADD_NEW_ADDRESS:
            return {
                ...state,
                addressArray: [
                    ...state.addressArray,
                    action.data
                ]
            }

        case SET_PRIVATE_KEY:
            return {
                ...state,
                privateKey: action.privateKey
            }

        case CLEAR_ADDRESS_LIST:
            return {
                ...state,
                addressArray: []
            }

        default:
            return state;
    }
}