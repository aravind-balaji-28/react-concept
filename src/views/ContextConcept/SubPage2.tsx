import React from "react";
import { useActions } from "../../context/useActionContext";
// Without react memo rerender
// Because parent re-render triggers child render
// const SubPage2 = () => { 
const SubPage2 = React.memo(() => {
    console.log("SubPage2 render");
    const { decrement, resetQuotes } = useActions();

    return (
        <div>

            <button onClick={decrement}>decrement</button>
            <button onClick={resetQuotes}>resetQuotes</button>
        </div>
    );
});
// }

export default SubPage2