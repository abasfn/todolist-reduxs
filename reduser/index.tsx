import { AnyAction } from "redux"
import { dataType, stateModel } from "../model/statemodel";

export const dataReduser = (state: dataType[] = [], action: AnyAction) => {
    if (action.type === 'ADDITEM') {
        let indexOF = state.find(element => element.phoneNumber === action.payload.phoneNumber);
        if (indexOF) {
            alert('تکراری است')
            return state
        }
        const data = action.payload;
        data.id = state.length;
        state = [...state, data]
    }
    if (action.type === 'DELETEITEM') {
        let delet = state.filter(item => item != action.payload);
        return [...delet]
    }
    if (action.type === 'EDITITEM') {
        debugger
        const addId = action.payload[1];
        addId.id = state.length;
            
        state[action.payload[0]] = action.payload[1];
        // let indexOF = state.find(element => element.id === action.payload.id);
        // console.log(found);
        return [...state]
    }
    return state
}
export const reduserDtae = (state: stateModel) => state.dataReduser;