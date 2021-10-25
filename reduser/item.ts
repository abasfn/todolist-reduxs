import { AnyAction } from "redux"
import { Item, stateModel } from "../model/statemodel";

const inishalStae: Item = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    id: -1,
    age: '-1',
    index: -1
}
export const ItemReduser = (state: Item = inishalStae, action: AnyAction) => {
    if (action.type === 'SETDATA') {
        let data = action.payload[0];
        data.index = action.payload[1]
        state = data;
    }
    return state;
}
export const RoteItemreduser = (state: stateModel) => state.ItemReduser;