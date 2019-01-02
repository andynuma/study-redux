const title = (state = "test title", action) => {
  switch (action.type) {
    case "WAIT":
      return "Wait";
    case "CHANGE_TITLE":
      return action.payload.title;
    default:
      return state;
  }
};

export default title;
