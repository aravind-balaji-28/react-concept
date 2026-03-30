import React, { createContext, useContext, useMemo } from "react"
import { useActionInfo } from "../hooks/useActionInfo";

interface IAppContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
}
const AppContext = createContext<IAppContextType | null>(null)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { count, increment, decrement } = useActionInfo();
    const value = useMemo(
        () => ({
            count,
            increment,
            decrement,
        }),
        [count, increment, decrement]
    );
    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export const useAction = () => {
    const ctx = useContext(AppContext)
    if (!ctx) throw new Error("useAction must be used inside provider")
    return ctx
}