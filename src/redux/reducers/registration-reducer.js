import { userConstants } from "../constants/types";
import { loadRegistrationReducer } from "../store/localStorage";

const initialState = loadRegistrationReducer();

export function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
