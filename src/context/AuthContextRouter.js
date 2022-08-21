import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) ? true : false)

    const data = {
        user, setUser
    }
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
export const useAuthRouter = () => useContext(Context)

