import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as LoginReducer } from "./login/reducer";
import { reducer as signupReducer } from "./signup/reducer";
import { reducer as OEM_Reducer } from "./oem/reducer";
import { reducer as addCarReducer } from "./inventory/reducer";

const root = combineReducers({
  LoginReducer,
  signupReducer,
  OEM_Reducer,
  addCarReducer,
});

export const store = legacy_createStore(root, applyMiddleware(thunk));
