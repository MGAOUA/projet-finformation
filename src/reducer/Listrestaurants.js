const initialList = {
  listResto: [],
};

const findListRestoReducer = (state = initialList, action) => {
  switch (action.type) {
    case "GetListInitial":
      {
        console.log("action", action);
        return {
          listResto: action.payload,
        };
      }
      break;
    case "FindListRestaurant":
      {
        return {
          listResto: state.listResto.find((e) => e.name == action.payload),
        };
      }
      break;

    default:
      break;
  }

  return state;
};

export default findListRestoReducer;
