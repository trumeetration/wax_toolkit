import {INPUT_ADDRESS} from "../types/explorerTypes";

const initialState = {
    inputText: ''
}

export const explorerReducer = (state  = initialState, action) => {
    // console.log('EXPLORER reducer state > ', state)

    switch (action.type) {

        case INPUT_ADDRESS:
            return {
                ...state,
                inputText: action.text
            }

        default:
            return state;
    }
}