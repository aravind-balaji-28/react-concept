import React from "react";
import { useAction } from "../../context/ActionContext";

const SubPage2 = () => {
    const { decrement } = useAction();
    return (
        <div>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default SubPage2