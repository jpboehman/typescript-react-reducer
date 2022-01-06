import React, { useState, useEffect, ReactNode } from 'react'

// import context objects
import { ThemeContext, defaultTheme} from '../store/context'

// Make props in the form of a type!
type Props = {
    children?: ReactNode,
}

const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState(defaultTheme)

    // We would normally get the theme from a web API, but we are hard-coding in this example
    useEffect(() => {
        const currentTheme = 'lightblue';
        setTheme(currentTheme);
    }, [])

    return (
        <ThemeContext.Provider value={ theme }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
