import { AppProvider } from "../../contexts/appContext";    

export const Layout = ({ children }) => { 
    return (
    <>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
    </>
)}