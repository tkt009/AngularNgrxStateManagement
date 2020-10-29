import { ActionReducerMap} from '@ngrx/store';
import { AppState } from 'src/app/state/appState.state';
import { NameReducer, NameState }  from './name.reducer';
import { CounterReducer, CounterState } from './counter.reducer';

export interface ApplicationSate{
    theName: NameState;
    theCounter: CounterState;
}
export const reducers: ActionReducerMap<ApplicationSate> ={
    theName: NameReducer,
    theCounter: CounterReducer
};