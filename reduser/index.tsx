import { AnyAction } from "redux"
import { dataType, inshialState, stateModel } from "../action/model/statemodel"

const inishialState: inshialState = {
    state: [],
    index: -1
}
export const dataReduser = (state: inshialState = inishialState, action: AnyAction) => {
    if (action.type === 'ADDITEM') {
        state.state = [...state.state, action.payload]
    }
    if (action.type === 'DELETEITEM') {
        debugger
        let delet = state.state.filter(item => item != action.payload);
        return state.state = [...delet]
    }
    if (action.type === 'SETINDEX') {

    }
    return { ...state }
}
export const reduserDtae = (state: stateModel) => state.dataReduser;