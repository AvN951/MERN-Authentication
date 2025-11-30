import { createContext, useState } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props)=>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserDate] = useState(false)
    const value= {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserDate
    }
    return(
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}