import { dataType } from "./model/statemodel"

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
export const SetItem = (item: dataType) => {
    return {
        type: 'SETDATA',
        payload: item
    }
}
export const DeleteItem = (item: dataType) => {
    return {
        type: 'DELETEITEM',
        payload: item
    }
}
export const EditItem = (item: dataType) => {
    return {
        type: 'EDITITEM',
        payload: item
    }
}
export const SetIndex = (index: number) => {
    return {
        type: 'SETINDEX',
        payload: index
    }
}