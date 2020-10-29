import { Action } from '@ngrx/store';
import { AppState } from 'src/app/state/appState.state';
import { NameState } from '../reducers/name.reducer';

export const SaveAction = 'Save_Action';
export const ClearAction = 'Clear_Action';
export class SaveName implements Action{
    readonly type = SaveAction;
    constructor(public payload: NameState){
    }
}

export class ClearName implements Action{
    readonly type =  "Clear_Action";
}
export type NameActions = SaveName
 | ClearName;