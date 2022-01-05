import React, { useState, useReducer } from 'react'

interface Who {
    name: string,
    friend: boolean,
}

interface Address {
    line1: string,
    line2?: string,
    state: string,
    zipcode: string,
}

interface Props {
    who: Who,
    address: Address,
    renderMessage?: (message: string) => React.ReactNode, 
    message?: string,
}
// One way to declare default props!
export const Hello = ({ who, renderMessage, message = 'Thank you for choosing Recurrency!' }: Props) => {
    const [counter, setCounter] = useState<number>(0);


    return (
        <React.Fragment>
            <p>
                Hello, {who.name}
                {who.friend && " my friend"}
            </p>
            {message && (renderMessage ? renderMessage(message) : <p>{message}</p>)}
        </React.Fragment>
    )
}
// Another way to declare default props! 
// Hello.defaultProps = {
//     message: 'Thank you for choosing Recurrency!'
// }

export default Hello
