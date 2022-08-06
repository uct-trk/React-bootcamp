import { createContext, useContext, useReducer } from "react";
import { siteReducer } from '../reducer'

const Context = createContext();

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(siteReducer, {
        theme: localStorage.getItem("theme") || 'light',
        language: localStorage.getItem("language") || 'tr'
    })

    const data = {
        ...state, dispatch
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

// custom hook
export const useSite = () => useContext(Context)

export default Provider;