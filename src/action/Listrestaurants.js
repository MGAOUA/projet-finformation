const GetListInitial = (listResto) => ({
  type: "GetListInitial",
  payload: listResto, //un tableau d'object contient les informations de chq resto
});

const FindListRestaurant = (RestoName) => ({
  type: "FindListRestaurant",
  payload: RestoName, //un tableau d'object contient les informations de chq resto
});

export default { FindListRestaurant, GetListInitial };
