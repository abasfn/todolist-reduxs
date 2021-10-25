export type dataType = {
    id:number;
    firstName: string;
    lastName: string;
    age: string;
    phoneNumber: string;
}
export type Item = {
    id:number;
    firstName: string;
    lastName: string;
    age: string;
    phoneNumber: string;
    index:number;
}
export type stateModel = {
    dataReduser:dataType[];
    ItemReduser:dataType;
    modal:boolean;
}
export type inshialState = {
    state:dataType[],
    index:number
}