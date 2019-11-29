import {
  REGISTRATION_ADD,
  IMAGE_GET
} from "./actions";

const defaultState = {
  data: [],
  fact:''
};

export const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTRATION_ADD:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case IMAGE_GET:
      return {
        ...state,
        fact: action.payload
      };
  }
  return state;
};
