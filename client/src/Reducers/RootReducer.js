const initState = {
  User: {},
  Quizes: {}
};

const RootReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      console.log(action);
      const updatedUser = action.newUser;
      return {
        ...state,
        User: updatedUser
      };

    default:
      break;
  }
};

export default RootReducer;
