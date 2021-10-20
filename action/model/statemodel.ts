export type dataType = {
    firstname?: string;
    lastname?: string;
    age?: number;
    phonenumber?: number;
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