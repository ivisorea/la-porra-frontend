import React, { useState } from "react";
import { AppContext } from "./AppContext"
import { Children} from "../model/model"

export const AppProvider = ({children}: Children) => {
    const [openModal, setOpenModal] = useState(false);

    return(
        <AppContext.Provider value={{
            openModal,
            setOpenModal
        }}>
            {children}
        </AppContext.Provider>

    )
}