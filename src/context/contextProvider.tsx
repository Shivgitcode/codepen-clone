import { createContext } from "react";

interface ValueProp {

}


const contextProvider = createContext<ValueProp | null>(null)


export default function ContextAppProvider({ children }: { children: React.ReactNode }) {
    const




    return <contextProvider.Provider value={value}>
        {children}
    </contextProvider.Provider>

}