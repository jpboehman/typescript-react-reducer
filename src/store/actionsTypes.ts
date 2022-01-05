type Increment = {
    readonly type: 'increment';
    readonly incrementStep: number;
}

type Decrement = {
    readonly type: 'decrement';
    readonly decrementStep: number;
}

type Double = {
    readonly type: 'double';
}

type Reset = {
    readonly type: 'reset';
    readonly initialCount: number;
}

export type Actions = Increment | Decrement | Double | Reset
