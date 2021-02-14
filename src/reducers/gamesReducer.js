const initState = {
  popular: [],
  new: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload };

    default:
      return { ...state };
  }
};

export default gamesReducer;
