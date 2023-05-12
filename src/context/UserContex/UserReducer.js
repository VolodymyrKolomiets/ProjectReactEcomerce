const users = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
          message: action.payload.msg
        };
      default:
        return state;
    }
  };
  export default users;