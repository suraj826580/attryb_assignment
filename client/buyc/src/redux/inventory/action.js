import axios from "axios";
import {
  ADD_CAR_DETAILS_REQ,
  ADD_CAR_DETAILS_REQ_FAILURE,
  ADD_CAR_DETAILS_REQ_SUCCESS,
} from "./action-type";

export const action_add_car = (carDetails) => (dispatch) => {
  dispatch({ type: ADD_CAR_DETAILS_REQ });
  return axios({
    method: "post",
    url: "http://localhost:8080/inventory/post",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    data: carDetails,
  })
    .then((res) =>
      dispatch({ type: ADD_CAR_DETAILS_REQ_SUCCESS, payload: res.data.msg })
    )
    .catch((err) => dispatch({ type: ADD_CAR_DETAILS_REQ_FAILURE }));
};
