const initialState = {
   tajMahal: JSON.parse(localStorage.getItem("tajMahal")) || 0,
  petra: JSON.parse(localStorage.getItem("petra")) || 0,
  machuPicchu: JSON.parse(localStorage.getItem("machuPicchu")) || 0,
  init: 0,
};

export default function reducer(state = initialState, action) {
  // console.log("Entré al reducer!: ",action.type)
  // console.log("Data Taj Majal: ",state.tajMahal)
  switch (action.type) {
    case "tajMahal":
      localStorage.setItem("tajMahal", state.tajMahal + 1);
      return {
        ...state,
        tajMahal: state.tajMahal + 1,
      };

    case "petra":
      localStorage.setItem("petra", state.petra + 1);
      return {
        ...state,
        petra: state.petra + 1,
      };

    case "machuPicchu":
      localStorage.setItem("machuPicchu", state.machuPicchu + 1);
      return {
        ...state,
        machuPicchu: state.machuPicchu + 1,
      };
    case "init":
      return {
        ...state,
        init: state.init + 1,
      };

    default:
      break;
  }
}
