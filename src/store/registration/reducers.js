import {
  REGISTRATION_ADD
} from "./actions";

const defaultState = {
  data: []
};

export const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTRATION_ADD:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
  }
  return state;
};
