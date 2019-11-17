const initState = {
  User: {},
  Quizes: [],
  solved : [],
  posted: []
};

const RootReducer = (state = initState, action) => {

  switch (action.type) {
    case "ADD_USER":
      const newUser = action.newUser;
      return {
        ...state,
        solved : newUser
      };
    
    case "ADD_TO_SOLVED":
      const newQuiz = action.newQuiz;
      return {
        ...state,
        User: newQuiz
      };
  
    default:
      break;
  }
  
};

export default RootReducer;
