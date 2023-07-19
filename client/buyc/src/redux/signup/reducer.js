import {
  SIGNUP_REQ,
  SIGNUP_REQ_FAILURE,
  SIGNUP_REQ_SUCESS,
} from "./action_types";

const intialState = {
  isLoading: false,
  isError: false,
  isRegistered: "",
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQ:
      return { ...state, isLoading: true, isError: false };
    case SIGNUP_REQ_SUCESS:
      return { ...state, isLoading: false, isRegistered: payload };
    case SIGNUP_REQ_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return intialState;
  }
};
