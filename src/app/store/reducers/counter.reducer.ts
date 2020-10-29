import { AppState, initAppState } from 'src/app/state/appState.state';
import * as counterActions  from '../actions/counter.action';

export interface CounterState{
    counter: number;
}

export function CounterReducer(state:CounterState = {counter:0}, action: counterActions.CounterActions ): CounterState {
    switch(action.type){
        case counterActions.IncrementAction:
            var curr = state.counter;
            return {
                counter: curr + action.payload
            }            
        case counterActions.DecrementAction:
            var curr = state.counter;
            return {
                counter: curr -1
            }
        default: return state;
    }
}