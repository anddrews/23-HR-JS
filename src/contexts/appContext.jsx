import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const AppProvider = ({children}) => {
    const [state, setState] = useState({count: 10});

    return (
        <Context.Provider value={{ state, setState }}>
            {children}
        </Context.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}