export default function authReducer(
  state = {
    isUserLoggedIn: undefined,
  },
  action
) {
  switch (action.type) {
    case "LOGIN_USER_METHOD":
      return { ...state, isUserLoggedIn: true };
    case "LOGOUT_USER_METHOD":
      return { ...state, isUserLoggedIn: false };

    default:
      return state;
  }
}
