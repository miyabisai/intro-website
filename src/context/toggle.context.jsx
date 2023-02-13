import { useState,createContext } from "react";

export const ToggleContext = createContext({
    isMenuOpen: false,
    setIsMenuOpen:()=>{}
});


export const ToggleProvider = ({ children }) => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const value = { isMenuOpen,setIsMenuOpen };
    return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>

}