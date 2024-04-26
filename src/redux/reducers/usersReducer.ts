import { User } from "types";
import { SET_USER, SET_JWT } from "@redux/constants";

type UserReducerType = {
  user: User;
  jwt?: string;
};

const initialState: UserReducerType = {
  user: {} as User,
  jwt: "",
};

export const userReducer = (
  state = initialState,
  action: { type: string; payload: any }
): UserReducerType => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_JWT:
      return {
        ...state,
        jwt: action.payload,
      };
    default:
      return state;
  }
};
