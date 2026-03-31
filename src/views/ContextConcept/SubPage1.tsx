import { useActions, useCount } from "../../context/useActionContext";
import SubPage2 from "./SubPage2";
import React from "react";

const SubPage1 = React.memo(() => {
    const { count, text } = useCount();
    const { increment, generateQuotes } = useActions();

    console.log("SubPage1 render");
    return (
        <div>
            <div style={{ display: "flex", gap: "10px" }}>
                <p>Count: {count}</p>
                <p>Quote: {text}</p>
            </div>

            <button onClick={increment}>increment</button>
            <button onClick={generateQuotes}>GenerateQuotes</button>
            <SubPage2 />
        </div>
    );
});

export default SubPage1;