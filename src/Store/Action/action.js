import * as actionTypes from './actionTypes';

const darkHandler = (darkValue) => {
  return {
    type: actionTypes.dark,
    value: darkValue
  }
}

export default darkHandler;