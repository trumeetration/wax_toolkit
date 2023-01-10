import {
    SET_ENDPOINT,
    ADD_NEW_ADDRESS,
    SET_PRIVATE_KEY,
    CLEAR_ADDRESS_LIST,
    DELETE_ADDRESS, ADD_ADDRESS_LIST, SET_NEW_ADDRESS_LIST
} from "../types/settingsTypes";

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

        case DELETE_ADDRESS:
            return (() => {
                const { id } = action;
                const { addressArray } = state;
                const addressIndex = addressArray.findIndex(res => res.id === id);

                const newArr = [
                    ...addressArray.slice(0,addressIndex),
                    ...addressArray.slice(addressIndex + 1)
                ];

                return {
                    ...state,
                    addressArray: newArr
                }
            })();

        case ADD_ADDRESS_LIST:
            return {
                ...state,
                addressArray: [
                    ...state.addressArray,
                    ...action.data
                ]
            }

        case SET_NEW_ADDRESS_LIST:
            return {
                ...state,
                addressArray: action.data
            }

        default:
            return state;
    }
}