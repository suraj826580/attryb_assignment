import { LOGIN_REQ, LOGIN_REQ_FAILURE, LOGIN_REQ_SUCESS } from "./action_types";

const intialState = {
  isLoading: false,
  isError: false,
  token: "",
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ:
      return { ...state, isLoading: true, isError: false };
    case LOGIN_REQ_SUCESS:
      return { ...state, isLoading: false, token: payload };
    case LOGIN_REQ_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return intialState;
  }
};
