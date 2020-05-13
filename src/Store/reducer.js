const initialState = {
  dark: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "dark":{
      console.log(action.value)
      return {
        ...state,
        dark: action.value
      }
    }
  
    default:
      return state;
  }
}

export default reducer;