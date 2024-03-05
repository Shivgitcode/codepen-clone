import React, { createContext, useContext, useState } from "react";

interface DataProp {
    html: string
    css: string
    js: string,


}

interface ValueProp {
    data: DataProp,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setData: React.Dispatch<React.SetStateAction<DataProp>>
}


const contextProvider = createContext<ValueProp | null>(null)


export default function ContextAppProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<DataProp>({ html: "", css: "", js: "" })
    const [loading, setLoading] = useState(false)

    const value: ValueProp = {
        loading,
        setLoading,
        data,
        setData
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