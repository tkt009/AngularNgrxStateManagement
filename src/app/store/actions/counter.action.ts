import { Action } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';

export const IncrementAction = 'Increment_Counter_Action';
export const DecrementAction = 'Decrement_Counter_Action';
export class IncrementCounter implements Action{
    readonly type = IncrementAction;
    constructor(public payload: number){
    }
}

export class DecrementCounter implements Action{
    readonly type =  DecrementAction;
}
export type CounterActions = IncrementCounter
 | DecrementCounter;