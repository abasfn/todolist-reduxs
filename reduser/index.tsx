import { AnyAction } from "redux"
import { dataType, stateModel } from "../action/model/statemodel"

export const dataReduser = (state: dataType[] = [], action: AnyAction) => {
    if (action.type === 'ADDITEM') {
        state = [...state, action.payload]
    }
    if (action.type === 'DELETEITEM') {
        let delet = state.filter(item => item != action.payload);
        return [...delet]
    }
    if (action.type === 'EDITITEM') {
        debugger
        const found = state.indexOf(action.payload);
        console.log(found);
    }
    return [...state]
}
export const reduserDtae = (state: stateModel) => state.dataReduser;