import { dataType } from "../model/statemodel"

export const ModalAction = () => {
    return {
        type: 'MODALACTION'
    }
}
export const AddItem = (item: dataType) => {
    return {
        type: 'ADDITEM',
        payload: item
    }
}
export const SetItem = (item: dataType, index: number) => {
    return {
        type: 'SETDATA',
        payload: [item, index]
    }
}
export const DeleteItem = (item: dataType) => {
    return {
        type: 'DELETEITEM',
        payload: item
    }
}
export const EditItem = (index: number, item: dataType) => {
    return {
        type: 'EDITITEM',
        payload: [index, item]
    }
}
export const SetIndex = (index: number) => {
    return {
        type: 'SETINDEX',
        payload: index
    }
}