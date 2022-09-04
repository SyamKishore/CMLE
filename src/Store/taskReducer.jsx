import {
  SET_ACTIVE_TAB,
  SET_CONFIG_MODULE_ACTIVE,
} from "../Constants/actionConstants";
import { State } from "./state";

export const taskReducer = (initialState = State, action) => {
  const newState = { ...initialState };
  switch (action.type) {
    case SET_ACTIVE_TAB:
      newState.activeTab = action.payload;
      return { ...newState };
    case SET_CONFIG_MODULE_ACTIVE:
      newState[action.payload] = !newState[action.payload];
      return { ...newState };
    default:
      return { ...newState };
  }
};
