import axios from "axios";
import {
  SIGNUP_REQ,
  SIGNUP_REQ_FAILURE,
  SIGNUP_REQ_SUCESS,
} from "./action_types";

export const SingupFun = (credential) => (dispatch) => {
  dispatch({ type: SIGNUP_REQ });
  return axios({
    method: "post",
    headers: { "Content-Type": "application/json" },
    url: "http://localhost:8080/register",
    data: credential,
  })
    .then((res) => dispatch({ type: SIGNUP_REQ_SUCESS, payload: res.data }))
    .catch((err) => dispatch({ type: SIGNUP_REQ_FAILURE }));
};
