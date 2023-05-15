const users = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
        user: action.payload.user
      };
    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        logoutMessage:action.payload.message
      };
    default:
      return state;
  }
};
export default users;