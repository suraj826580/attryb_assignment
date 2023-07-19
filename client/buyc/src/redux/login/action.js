import { LOGIN_REQ, LOGIN_REQ_FAILURE, LOGIN_REQ_SUCESS } from "./action_types";
import axios from "axios";

export const LoginFun = (credential) => (dispatch) => {
  dispatch({ type: LOGIN_REQ });
  return axios({
    method: "post",
    headers: { "Content-Type": "application/json" },
    url: "http://localhost:8080/login",
    data: credential,
  })
    .then((res) =>
      dispatch({ type: LOGIN_REQ_SUCESS, payload: res.data.token })
    )
    .catch((err) => dispatch({ type: LOGIN_REQ_FAILURE }));
};
