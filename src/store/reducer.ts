import { Actions } from './actionsTypes';
import { State, initialState }  from './initialState';

// const init = (initialState: { count: number; }) => initialState.count
const init = (count: number): any =>  {
    return { count: initialState.count }
}

export const reducer = (state: State, action: Actions): State => {
    // const { type } = action;
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.incrementStep };
        case 'decrement':
            return { count: state.count - action.decrementStep };
        case 'double':
            return { count: state.count * 2 };
        case 'reset':
            return init(initialState.count);
        default:
            neverReached(action); // Never type is used so this code should never be reached!
    }
    return state;
}

const neverReached = (never: never) => {};