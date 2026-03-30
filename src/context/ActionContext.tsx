import React, { createContext, useContext } from "react"
import { useActionInfo } from "../hooks/useAction";

interface IAppContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
}
const AppContext = createContext<IAppContextType | null>(null)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const actions = useActionInfo()
    return (
        <AppContext.Provider value={actions}>{children}</AppContext.Provider>
    )
}

export const useAction = () => {
    const ctx = useContext(AppContext)
    if (!ctx) throw new Error("useAction must be used inside provider")
    return ctx
}