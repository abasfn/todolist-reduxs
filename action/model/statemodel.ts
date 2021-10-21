export type dataType = {
    id:number;
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
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