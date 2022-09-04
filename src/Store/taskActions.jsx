import {
  SET_ACTIVE_TAB,
  SET_CONFIG_MODULE_ACTIVE,
} from "../Constants/actionConstants";

export const setActiveTab = (payload) => {
  return {
    type: SET_ACTIVE_TAB,
    payload: payload,
  };
};

export const setConfigModuleActive = (payload) => {
  return {
    type: SET_CONFIG_MODULE_ACTIVE,
    payload: payload,
  };
};
