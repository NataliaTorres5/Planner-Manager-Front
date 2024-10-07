import { createAction } from "@reduxjs/toolkit";

const userActions = {
  login: createAction("login", (data) => {
    return {
      payload: {
        user: data?.data,
        token: data?.token,
      },
    };
  }),
  logout: createAction("logout", () => {
    return {
      payload: {},
    };
  }),
};

export default userActions;
