import {
  ADD_CAR_DETAILS_REQ,
  ADD_CAR_DETAILS_REQ_FAILURE,
  ADD_CAR_DETAILS_REQ_SUCCESS,
} from "./action-type";

const intialStatae = {
  isLoading: false,
  isError: false,
  msg: "",
};

export const reducer = (state = intialStatae, { type, payload }) => {
  switch (type) {
    case ADD_CAR_DETAILS_REQ:
      return { ...state, isLoading: true, isError: false };
    case ADD_CAR_DETAILS_REQ_SUCCESS:
      return { ...state, isLoading: false, msg: payload };
    case ADD_CAR_DETAILS_REQ_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
