import { combineReducers } from "redux";
import AuthReducer from "components/Auth/reducer";

const RootReducer = combineReducers({ AuthReducer });

export default RootReducer;
