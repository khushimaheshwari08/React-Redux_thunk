export function loginUserAction(action) {
  return {
    type: "LOGIN_USER_METHOD",
    payload: action,
  };
}

export function logoutUserAction(action) {
  return {
    type: "LOGOUT_USER_METHOD",
    payload: action,
  };
}
