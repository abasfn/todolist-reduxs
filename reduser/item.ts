import { AnyAction } from "redux"
import { dataType, stateModel } from "../action/model/statemodel"
export const ItemReduser = (state: dataType[] = [], action: AnyAction) => {
    // if (action.type === 'SETDATA') {
    //     state = { ...action.payload }
    //     return { ...state}
    // }
    // return { ...state}
    switch(action.type){
        case "SETDATA":
            state = action.payload;
            return action.payload;
            default:
                return state
    }
}
export const RoteItemreduser = (state: stateModel) => state.ItemReduser;