import { createContext, useContext, useState } from "react";

interface ValueProp {

}


const contextProvider = createContext<ValueProp | null>(null)


export default function ContextAppProvider({ children }: { children: React.ReactNode }) {
    const [html, setHtml] = useState<String>(" ")
    const [css, setCss] = useState<String>(" ")
    const [js, setJs] = useState<String>(" ")

    const value = {
        html,
        setHtml,
        css, setCss,
        js,
        setJs
    }




    return <contextProvider.Provider value={value}>
        {children}
    </contextProvider.Provider>

}


export const useAppContext = () => {
    const context = useContext(contextProvider)
    if (context === null) {
        throw new Error("couldn't find context")


    }
    return context
}