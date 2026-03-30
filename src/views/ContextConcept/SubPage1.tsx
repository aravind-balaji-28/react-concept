import React from "react";
import { useAction } from "../../context/ActionContext";
import SubPage2 from "./SubPage2";

const SubPage1 = () => {
    const { count, increment } = useAction();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <SubPage2 />
        </div>
    );
};

export default SubPage1