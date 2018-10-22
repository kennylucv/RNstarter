import { types as actionTypes } from "../actions/actions";

const INITAL_STATE = {
  hello: "world"
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TEST_ACTION:
      return { ...state, hello: "TEST" };
    default:
      return state;
  }
};
