import {combineReducers} from "redux";
import {activePageReducer} from "./reducers/activePageReducer";
import {explorerReducer} from "./reducers/explorerReducer";
import {settingsReducer} from "./reducers/settingsReducer";

export const rootReducer = combineReducers({
    activePageReducer,
    explorerReducer,
    settingsReducer
});