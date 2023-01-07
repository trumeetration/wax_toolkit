import {EXPLORER_INPUT_ADDRESS} from '../types'

const initialState = {
    inputText: ''
}

export const explorerReducer = (state  = initialState, action) => {
    console.log('EXPLORER reducer > ', action)

    switch (action.type) {

        case EXPLORER_INPUT_ADDRESS:
            return {
                ...state,
                inputText: action.text
            }

        default:
            return state;
    }
}