import { SET_OUTPUT } from "@redux/constants/outputConstants";
import { ProductStock } from "types";

export function setOutput(output: ProductStock[]) {
  return {
    type: SET_OUTPUT,
    payload: output,
  };
}
