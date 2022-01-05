import React, { useState, useReducer, Reducer } from 'react';
import { TextField, Button, List, ListItem, Box, FormLabel } from '@material-ui/core';

import { reducer } from '../store/reducer';
import { Actions } from '../store/actionsTypes'
import { State, initialState, } from '../store/initialState';

type Props = {
    incrementStep?: number,
    decrementStep?: number,
    initialCount?: number,
}

// Providing default values for the optional parameters passed in!
export const Counter = ({ incrementStep = 0, decrementStep = 0, initialCount = 0 }) => {
    // Strongly typing the useReducer hook with generics:
    const [state, dispatch] = useReducer<Reducer<State, Actions>>(reducer, { count: initialState.count })

    // Allowing TypeScript to use type inference:
    // const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <div>
            <FormLabel>{!state.count ? initialState.count : state.count}</FormLabel>
            <Button onClick={() => dispatch({ type: 'increment', incrementStep })}>Add {incrementStep}</Button>
            <Button onClick={() => dispatch({ type: 'decrement', decrementStep })}>Subract {decrementStep}</Button>
            <Button onClick={() => dispatch({ type: 'double' })}>Double {state.count}</Button>
            <Button onClick={() => dispatch({ type: 'reset', initialCount })}>Reset count</Button>
            </div>
        </Box>
    )
}

export default Counter
