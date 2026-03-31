import {
    useState,
    useCallback,
    useMemo,
    type ReactNode,
} from "react";
import { StateContext, ActionContext } from "./context";

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("")

    // stable functions
    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount((c) => c - 1);
    }, []);

    const quotes: string[] = [
        "Stay hungry, stay foolish.",
        "Code is like humor. When you have to explain it, it’s bad.",
        "First, solve the problem. Then, write the code.",
        "Simplicity is the soul of efficiency.",
        "Make it work, make it right, make it fast."
    ];

    const generateQuotes = useCallback(() => {
        const index = Math.floor(Math.random() * quotes.length);
        let textVal = quotes[index];
        setText(textVal);
    }, []);

    const resetQuotes = useCallback(() => {
        setText("");
    }, []);

    // actions NEVER change
    const actions = useMemo(
        () => ({ increment, decrement, generateQuotes, resetQuotes }),
        [increment, decrement, generateQuotes, resetQuotes]
    );
    const state = useMemo(
        () => ({ count, text }),
        [count, text]
    );

    return (
        <StateContext.Provider value={state} >
            <ActionContext.Provider value={actions}>
                {children}
            </ActionContext.Provider>
        </StateContext.Provider>
    );
};