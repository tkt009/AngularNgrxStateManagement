export interface AppState{
    name:string;
    counter: number;
}

export const initAppState: AppState = {
    name:null,
    counter: 0
}