import { combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer, outputReducer } from "@redux/reducers";

const rootReducer = combineReducers({
  userReducer,
  outputReducer
});

const configureStore: any = () => {
  return createStore(rootReducer);
};

export default configureStore;

export type State = ReturnType<typeof rootReducer>;
