import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {}
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // call api
        // setUser(data)
    })

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;