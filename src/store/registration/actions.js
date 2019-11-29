import {getFact} from "../../utils";
export const REGISTRATION_ADD = 'REGISTRATION_ADD ';
export const FACT_GET = 'FACT_GET';

export  const register = (data) => ({
  type: REGISTRATION_ADD,
  payload: data
});

export const getMeowFact = () => {
  return async dispatch => {
    try {
      const fact = await getFact();
      dispatch({ type: FACT_GET, payload: fact.data[0]});
    }catch (e) {
      console.log(e)
    }
  }
};
