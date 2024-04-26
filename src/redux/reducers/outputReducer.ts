import { SET_OUTPUT } from "@redux/constants/outputConstants";
import { ProductStock } from "types";

type OutputReducerType = {
  output: ProductStock[];
};

const initialState: OutputReducerType = {
  output: [] as ProductStock[]
};

export const outputReducer = (
  state = initialState,
  action: { type: string; payload: any }
): OutputReducerType => {
  switch (action.type) {
    case SET_OUTPUT:
      return {
        ...state,
        output: action.payload,
      };
    default:
      return state;
  }
};
