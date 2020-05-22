import * as actionType from '../Action/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  dark: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.dark:{
      return updateObject(state, {dark: action.value})
    }
  
    default:
      return state;
  }
}

export default reducer;