import { useCallback, useState } from "react";
import { AppProvider } from "../../context/ActionContext"
import SubPage1 from "./SubPage1";

const MainPage = () => {
    console.log('Enter main page')

    return (
        <AppProvider>
            <SubPage1 />
        </AppProvider>
    )
}

export default MainPage