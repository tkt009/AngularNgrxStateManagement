import { AppState, initAppState } from 'src/app/state/appState.state';
import * as NameActions  from '../actions/name.action';

export interface NameState{
    name: string;
}

export function NameReducer(state:NameState, action: NameActions.NameActions ): NameState {
    switch(action.type){
        case NameActions.SaveAction:
            //do not mutate existing object, create a new one
            return {
                name: action.payload.name
            };
        case NameActions.ClearAction:
        return {
            name: null
        };
        default: return state;
    }
}