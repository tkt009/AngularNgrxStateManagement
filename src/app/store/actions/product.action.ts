import { Action } from '@ngrx/store';
import { AppState } from 'src/app/state/appState.state';
import { NameState } from '../reducers/name.reducer';

export const ProductLoadAction = 'ProductLoad_Action';
export class ProductLoad implements Action{
    readonly type = ProductLoadAction;
    // constructor(public payload: NameState){
    // }
}

export type NameActions = ProductLoad;