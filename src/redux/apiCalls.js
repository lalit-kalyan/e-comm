import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import { publicRequest } from "../requestMethods";
import { mainUrl } from "../url";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(mainUrl + "/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
