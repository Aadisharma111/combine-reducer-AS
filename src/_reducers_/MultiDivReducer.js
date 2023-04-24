import { intialState } from "./initialState";


export const MultiDivRedfunc = (oldState=intialState,action)=>{
    console.log('action.payload---->',action.payload);
    let newState = oldState;
    switch(action.type){
      case 'MULTIPLYBY 4':
        return {
          ...newState,
          value:newState.value*action.payload
        };
        break;
      case 'MULTIPLY 8':
        return {
          ...newState,
          value:newState.value*action.payload
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