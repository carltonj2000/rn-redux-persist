import { SET_USER_NAME } from "./actions";

const name = (state = { name: "cj" }, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return { name: action.name };
    default:
      return state;
  }
};

export default name;
