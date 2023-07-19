import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as LoginReducer } from "./login/reducer";
import { reducer as signupReducer } from "./signup/reducer";
import { reducer as OEM_Reducer } from "./oem/reducer";

const root = combineReducers({
  LoginReducer,
  signupReducer,
  OEM_Reducer,
});

export const store = legacy_createStore(root, applyMiddleware(thunk));
