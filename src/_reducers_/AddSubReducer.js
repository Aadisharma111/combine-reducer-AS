import { intialState } from "./initialState";


export const addSubRedFunc = (oldState=intialState,action)=>{
    console.log(action);
    let newState = oldState;
    switch(action.type){
      case 'ADD':
        return {
          ...newState,
          value:newState.value+action.payload
        };
        break;
      case 'SUB':
        return {
          ...newState,
          value:newState.value-action.payload
        };
        break;
      case 'RESET':
        return {
          ...newState,
          value:action.payload
        };
        break;
      default:
        return newState;
    }
  
}